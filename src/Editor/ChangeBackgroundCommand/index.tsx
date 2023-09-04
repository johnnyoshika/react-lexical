import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  COMMAND_PRIORITY_LOW,
  INSERT_PARAGRAPH_COMMAND,
} from 'lexical';
import { useEffect } from 'react';

function generateLightColorHex() {
  // Generate a random number between min and max
  function randomBetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // Ensure the color values are in the higher end to get a light color
  let red = randomBetween(200, 255);
  let green = randomBetween(200, 255);
  let blue = randomBetween(200, 255);

  // Convert RGB values to hex and return
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(
    16,
  )}`;
}

const ChangeBackgroundCommand = () => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    const unregister = editor.registerCommand(
      INSERT_PARAGRAPH_COMMAND,
      () => {
        document.body.style.backgroundColor = generateLightColorHex();
        return false;
      },
      COMMAND_PRIORITY_LOW,
    );

    return unregister;
  }, []);

  return null;
};

export default ChangeBackgroundCommand;
