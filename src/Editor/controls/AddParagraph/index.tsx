import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  $getRoot,
  $getSelection,
  $createParagraphNode,
  $createTextNode,
} from 'lexical';

const AddParagraph = () => {
  const [editor] = useLexicalComposerContext();

  const appendParagraph = () => {
    editor.update(() => {
      const root = $getRoot();
      const paragraphNode = $createParagraphNode();
      const textNode = $createTextNode('Hello world');
      paragraphNode.append(textNode);
      root.append(paragraphNode);
    });
  };

  return <button onClick={appendParagraph}>Add paragraph</button>;
};

export default AddParagraph;
