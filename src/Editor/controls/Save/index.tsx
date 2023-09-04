import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { pubSub } from '../../../utils/pubSub';

const Save = () => {
  const [editor] = useLexicalComposerContext();

  const handleSave = () => {
    pubSub.publish('save', editor);
  };

  return <button onClick={handleSave}>Save</button>;
};

export default Save;
