import { $getRoot, $getSelection, EditorState } from 'lexical';
import { useEffect, useState } from 'react';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
// import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';

const theme = {
  // Theme styling goes here
};

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error: any) {
  console.error(error);
}

// Lexical React plugins are React components, which makes them
// highly composable. Furthermore, you can lazy load plugins if
// desired, so you don't pay the cost for plugins until you
// actually use them.
const MyCustomAutoFocusPlugin = () => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    // Focus the editor when the effect fires!
    editor.focus();
  }, [editor]);

  return null;
};

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

const Editor = ({
  setEditorState,
}: {
  setEditorState: (value: EditorState) => void;
}) => {
  const initialConfig = {
    namespace: 'MyEditor',
    theme,
    onError,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <PlainTextPlugin
        contentEditable={<ContentEditable />}
        placeholder={<div>Enter some text...</div>}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin />
      <MyCustomAutoFocusPlugin />
      {/*
        Better to use the official LexicalOnChangePlugin:
        https://lexical.dev/docs/react/plugins#lexicalonchangeplugin
        https://github.com/facebook/lexical/issues/2587#issuecomment-1188427209
       */}
      <OnChangePlugin onChange={setEditorState} />
    </LexicalComposer>
  );
};

export default Editor;
