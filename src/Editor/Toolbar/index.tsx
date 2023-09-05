import { Grid } from '@mui/material';
import iconsList from './toolbarIconsList';
import useOnClickListener from './useOnClickListener';

const Toolbar = () => {
  const { onClick } = useOnClickListener();

  return (
    <Grid container sx={{ background: 'white', p: 1 }}>
      {iconsList.map(plugin => (
        <Grid item key={plugin.id} mr={2}>
          <plugin.Icon onClick={() => onClick(plugin.event)} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Toolbar;
