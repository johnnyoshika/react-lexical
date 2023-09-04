import { $generateHtmlFromNodes } from '@lexical/html';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

// https://github.com/facebook/lexical/blob/main/packages/lexical-html/README.md

const HtmlOut = () => {
  const [editor] = useLexicalComposerContext();

  const handleHtml = () => {
    // We can now use editorState.read() intead of editor.update() to get access to $generateHtmlFromNodes as of Feb 2023: https://github.com/facebook/lexical/issues/2587#issuecomment-1449165003
    // Note: the moment we call $getSelection(), we'll get runtime exception and we'll need to switch to editor.update().
    editor.getEditorState().read(() => {
      console.log($generateHtmlFromNodes(editor));
    });
  };

  return <button onClick={handleHtml}>HTML Out</button>;
};

export default HtmlOut;
