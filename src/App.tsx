import { useRef } from 'react';
import Editor from './Editor';
import Controls from './Controls';
import type { EditorState } from 'lexical';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import { CssBaseline, Grid, Typography } from '@mui/material';

const App = () => {
  // Use ref instead of state to prevent excessive re-renders of <Editor> every time editor state changes
  const editorStateRef = useRef<EditorState>();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        sx={{ minHeight: '100vh' }}
        flexDirection="column"
        alignItems="center" // Center content horizontally
      >
        <Grid item sx={{ my: 4 }}>
          <Typography variant="h4">Lexical Editor</Typography>
        </Grid>
        <Grid item sx={{ width: '80%' }}>
          <Editor editorStateRef={editorStateRef} />
        </Grid>
      </Grid>
      <Controls />
    </ThemeProvider>
  );
};

export default App;
