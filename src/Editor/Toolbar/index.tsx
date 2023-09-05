import { Grid } from '@mui/material';
import pluginsList from './toolbarIconsList';
import useOnClickListener from './useOnClickListener';

const Toolbar = () => {
  const { onClick } = useOnClickListener();

  return (
    <Grid
      container
      sx={{ background: 'white', p: 1 }}
      justifyContent="space-between"
    >
      {pluginsList.map(plugin => (
        <Grid item key={plugin.id}>
          <plugin.Icon onClick={() => onClick(plugin.event)} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Toolbar;
