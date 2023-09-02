import type { EditorState } from 'lexical';

const Controls = ({
  editorStateRef,
}: {
  editorStateRef: React.MutableRefObject<EditorState | undefined>;
}) => {
  const handleSave = () => {
    localStorage.setItem(
      'editorState',
      JSON.stringify(editorStateRef.current ?? {}),
    );
  };

  return (
    <div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Controls;
