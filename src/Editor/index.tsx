import './editor.css';
import type { EditorState } from 'lexical';
import {
  InitialConfigType,
  LexicalComposer,
} from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
// import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import AutofocusPlugin from './plugins/AutofocusPlugin';
import OnChangePlugin from './plugins/OnChangePlugin';
import AddParagraph from './controls/AddParagraph';
import Save from './controls/Save';
import Load from './controls/Load';
import HtmlOut from './controls/HtmlOut';
import HtmlIn from './controls/HtmlIn';
import ChangeBackgroundCommand from './commands/ChangeBackgroundCommand';
import { MuiContentEditable, placeHolderSx } from './styles';
import { Box } from '@mui/material';
import Toolbar from './Toolbar';
import theme from './theme';
import TreeViewPlugin from './plugins/TreeViewPlugin';
import MutationPlugin from './plugins/MutationPlugin';

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error: Error) {
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
    // editorState:
    //   '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"hello world!!!","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',
  } satisfies InitialConfigType;

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <Toolbar />
      <Box sx={{ position: 'relative', background: 'white' }}>
        <RichTextPlugin
          contentEditable={<MuiContentEditable />}
          placeholder={
            <Box sx={placeHolderSx}>Enter some text...</Box>
          } // Using placeHolderSx together with MuiContentEditable
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
        <MutationPlugin />
        <AddParagraph />
        <ChangeBackgroundCommand />
        <Save />
        <Load />
        <HtmlOut />
        <HtmlIn />
      </Box>
      <TreeViewPlugin />
    </LexicalComposer>
  );
};

export default Editor;
