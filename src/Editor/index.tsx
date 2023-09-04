import type { EditorState } from 'lexical';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
// import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import AutofocusPlugin from './AutofocusPlugin';
import OnChangePlugin from './OnChangePlugin';

import './editor.css';
import AddParagraph from './AddParagraph';
import Save from './Save';
import Load from './Load';
import HtmlOut from './HtmlOut';
import HtmlIn from './HtmlIn';

const theme = {
  ltr: 'ltr',
  rtl: 'rtl',
  paragraph: 'editor-paragraph',
};

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error: any) {
  console.error(error);
}

const Editor = ({
  editorStateRef,
}: {
  editorStateRef: React.MutableRefObject<EditorState | undefined>;
}) => {
  const initialConfig = {
    namespace: 'MyEditor',
    theme,
    onError,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <RichTextPlugin
        contentEditable={<ContentEditable />}
        placeholder={<div>Enter some text...</div>}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin />
      <AutofocusPlugin />
      {/*
        Better to use the official LexicalOnChangePlugin:
        https://lexical.dev/docs/react/plugins#lexicalonchangeplugin
        https://github.com/facebook/lexical/issues/2587#issuecomment-1188427209
       */}
      <OnChangePlugin
        onChange={editorState =>
          (editorStateRef.current = editorState)
        }
      />
      <AddParagraph />
      <Save />
      <Load />
      <HtmlOut />
      <HtmlIn />
    </LexicalComposer>
  );
};

export default Editor;
