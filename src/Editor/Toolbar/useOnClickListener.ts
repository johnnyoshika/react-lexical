import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { eventTypes } from './toolbarIconsList';
import { FORMAT_TEXT_COMMAND } from 'lexical';

const useOnClickListener = () => {
  const [editor] = useLexicalComposerContext();

  const onClick = (e: string) => {
    if (e === eventTypes.formatBold)
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');

    if (e === eventTypes.formatItalic)
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
  };

  return { onClick };
};

export default useOnClickListener;
