import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { pubSub } from '../../../utils/pubSub';

const Load = () => {
  const [editor] = useLexicalComposerContext();

  const handleLoad = () => {
    pubSub.publish('load', editor);
  };

  return <button onClick={handleLoad}>Load</button>;
};

export default Load;
