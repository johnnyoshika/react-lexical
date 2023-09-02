import type { EditorState } from 'lexical';

const Controls = ({ editorState }: { editorState?: EditorState }) => {
  const handleSave = () => {
    localStorage.setItem('editorState', JSON.stringify(editorState));
  };

  return (
    <div>
      <button
        onClick={handleSave}
        disabled={editorState === undefined}
      >
        Save
      </button>
    </div>
  );
};

export default Controls;
