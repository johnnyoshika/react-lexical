import { Grid, IconButton } from '@mui/material';
import useOnClickListener from './useOnClickListener';
import useToolbarIconsList from './useToolbarIconsList';

const Toolbar = () => {
  const { onClick } = useOnClickListener();
  const { icons } = useToolbarIconsList();

  return (
    <Grid container sx={{ background: 'white', p: 1 }}>
      {icons.map(i => (
        <Grid item key={i.id} mr={2}>
          <IconButton
            onClick={() => onClick(i.event)}
            color={i.active ? 'info' : 'default'}
          >
            <i.Icon />
          </IconButton>
        </Grid>
      ))}
    </Grid>
  );
};

export default Toolbar;
