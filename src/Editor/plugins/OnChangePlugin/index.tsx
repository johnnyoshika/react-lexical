import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import type { EditorState } from 'lexical';
import { useEffect } from 'react';

const OnChangePlugin = ({
  onChange,
}: {
  onChange: (editor: EditorState) => void;
}) => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    const unsubscribe = editor.registerUpdateListener(
      ({ editorState }) => {
        onChange(editorState);
      },
    );

    return unsubscribe;
  }, [editor, onChange]);

  return null;
};

export default OnChangePlugin;
