import { useEffect } from 'react';
import { pubSub } from '../utils/pubSub';
import type { LexicalEditor } from 'lexical';

const Controls = () => {
  useEffect(() => {
    const unsubscribe = pubSub.subscribe(
      'save',
      (editor: LexicalEditor) => {
        localStorage.setItem(
          'editorState',
          JSON.stringify(editor.getEditorState()),
        );
      },
    );

    return unsubscribe;
  }, []);

  useEffect(() => {
    const unsubscribe = pubSub.subscribe(
      'load',
      (editor: LexicalEditor) => {
        const editorState = localStorage.getItem('editorState');

        if (editorState)
          editor.setEditorState(editor.parseEditorState(editorState));
      },
    );

    return unsubscribe;
  }, []);

  return null;
};

export default Controls;
