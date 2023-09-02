import { useState } from 'react';
import Editor from './Editor';

const App = () => {
  const [editorState, setEditorState] = useState<string>();

  return <Editor setEditorState={setEditorState} />;
};

export default App;
