import { useState } from 'react';
import Editor from './Editor';
import Controls from './Controls';
import type { EditorState } from 'lexical';

const App = () => {
  const [editorState, setEditorState] = useState<EditorState>();

  return (
    <>
      <Editor setEditorState={setEditorState} />
      <Controls editorState={editorState} />
    </>
  );
};

export default App;
