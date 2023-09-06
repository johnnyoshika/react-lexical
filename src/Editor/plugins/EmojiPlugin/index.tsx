import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { LexicalEditor, TextNode } from 'lexical';
import { useEffect } from 'react';
import { $createEmojiNode } from '../../nodes/EmojiNode';

const emojis: Map<string, [string, string]> = new Map([
  [':)', ['emoji happysmile', '🙂']],
  [':D', ['emoji veryhappysmile', '😀']],
  [':(', ['emoji unhappysmile', '🙁']],
  ['<3', ['emoji heart', '❤']],
  ['🙂', ['emoji happysmile', '🙂']],
  ['😀', ['emoji veryhappysmile', '😀']],
  ['🙁', ['emoji unhappysmile', '🙁']],
  ['❤', ['emoji heart', '❤']],
]);

const findAndTransformEmoji = (node: TextNode): TextNode | null => {
  const text = node.getTextContent();

  for (let i = 0; i < text.length; i++) {
    const emojiData =
      emojis.get(text[i]) || emojis.get(text.slice(i, i + 2));

    if (emojiData === undefined) continue;

    const [emojiStyle, emojiText] = emojiData;

    let targetNode;

    if (i === 0) [targetNode] = node.splitText(i + 1);
    else [, targetNode] = node.splitText(i, i + 2);

    const emojiNode = $createEmojiNode(emojiStyle, emojiText);
    targetNode.replace(emojiNode);
    return emojiNode;
  }

  return null;
};

const textNodeTransform = (node: TextNode) => {
  let targetNode: TextNode | null = node;

  while (targetNode !== null) {
    // Once findAndTransformEmoji() returns an EmojiNode, targetNode.isSimpleText() will be false
    if (!targetNode.isSimpleText()) return;

    targetNode = findAndTransformEmoji(targetNode);
  }
};

const useEmojis = (editor: LexicalEditor) => {
  useEffect(() => {
    return editor.registerNodeTransform(TextNode, textNodeTransform);
  }, [editor]);
};

const EmojiPlugin = () => {
  const [editor] = useLexicalComposerContext();
  useEmojis(editor);
  return null;
};

export default EmojiPlugin;
