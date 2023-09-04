import styled from '@emotion/styled';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';

export const MuiContentEditable = styled(ContentEditable)({
  minHeight: 200,
  width: '100%',
  padding: '8px 8px',
  borderRadius: 5,
  position: 'relative',
  outline: 'none',
});

export const placeHolderSx = {
  position: 'absolute',
  top: 8,
  left: 8,
  userSelect: 'none',
  display: 'inline-block',
  pointerEvents: 'none',
};
