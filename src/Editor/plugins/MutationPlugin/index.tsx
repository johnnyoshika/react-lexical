import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { TextNode } from 'lexical';
import { useEffect } from 'react';

const MutationPlugin = () => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    return editor.registerMutationListener(TextNode, mutatedNodes => {
      // mutatedNodes is a Map where each key is the NodeKey, and the value is the state of mutation.
      for (let [nodeKey, mutation] of mutatedNodes) {
        console.log(nodeKey, mutation);
      }
    });
  }, [editor]);

  return null;
};

export default MutationPlugin;
