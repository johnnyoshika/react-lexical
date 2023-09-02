import { useRef } from 'react';
import Editor from './Editor';
import Controls from './Controls';
import type { EditorState } from 'lexical';

const App = () => {
  // Use ref instead of state to prevent excessive re-renders of <Editor> every time editor state changes
  const editorStateRef = useRef<EditorState>();

  return (
    <>
      <Editor editorStateRef={editorStateRef} />
      <Controls editorStateRef={editorStateRef} />
    </>
  );
};

export default App;
