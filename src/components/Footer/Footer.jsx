import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Typography } from '@mui/material';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box data-testid={'Footer'} sx={{ width: '100%', position: "fixed", bottom: 0}}>
      <Typography sx={{position: "fixed", bottom: 10, right: 10, color: 'white' }} >Copy Right 2022</Typography>
      <BottomNavigation
      sx={{backgroundColor: 'rgba(112, 178, 194, .7)', height: '100px' }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction icon={<RestoreIcon fontSize="large" sx={{ color: 'white', fontSize: '2.5em'  }} />} />
        <BottomNavigationAction icon={<FavoriteIcon fontSize="large" sx={{ color: 'white', fontSize: '2.5em'  }} />} />
        <BottomNavigationAction icon={<LocationOnIcon fontSize="large" sx={{ color: 'white', fontSize: '2.5em'  }} />} />
      </BottomNavigation>
    </Box>
  );
}