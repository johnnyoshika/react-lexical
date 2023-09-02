import { useState } from 'react';
import Editor from './Editor';
import type { EditorState } from 'lexical';

const App = () => {
  const [editorState, setEditorState] = useState<EditorState>();

  return <Editor setEditorState={setEditorState} />;
};

export default App;
