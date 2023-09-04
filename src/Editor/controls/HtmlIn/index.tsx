import {
  $generateHtmlFromNodes,
  $generateNodesFromDOM,
} from '@lexical/html';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $insertNodes } from 'lexical';

// https://github.com/facebook/lexical/blob/main/packages/lexical-html/README.md

const HTML = `
  <p>
    This is a <strong>bold</strong> word. Here we have an <em>italicized</em> word. And this is a <span class="red-text">colored</span> word.
  </p>
  <p>
    Another <strong class="blue-text">bold and colored</strong> word. This one is <em class="green-text">italicized and colored</em>.
  </p>
`;

const HtmlIn = () => {
  const [editor] = useLexicalComposerContext();

  const handleHtml = () => {
    // We're using editor.update() as a way to get access to the $ prefixed functions. Accessing them outside of a read or update will trigger a runtime error: https://lexical.dev/docs/intro#editor-updates
    // Technique borrowed from: https://stackoverflow.com/a/73081659/188740
    editor.update(() => {
      // Classes red-text, blue-text, green-text get stripped out b/c they're not included in the theme.
      // For more fine-tuned control, use this technique: https://github.com/facebook/lexical/issues/2587#issuecomment-1247181226
      const parser = new DOMParser();
      const dom = parser.parseFromString(HTML, 'text/html');
      const nodes = $generateNodesFromDOM(editor, dom);
      $insertNodes(nodes);
    });
  };

  return <button onClick={handleHtml}>HTML In</button>;
};

export default HtmlIn;
