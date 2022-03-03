import React, {useContext} from 'react';
import { connect } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NavMenu from '../Cart/ShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';




function Nav({numItems}) {
  // const login = useContext(LoginContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    if(numItems > 0) setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{backgroundColor: 'rgba(112, 178, 194, .7)' }}>
        <Toolbar>
        
          <Typography data-testid="Nav" variant='h5' component='div' sx={{ flexGrow: 1 }}>
            Virtual Store
          </Typography>
          <IconButton
            size='large'
            edge='end'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            id='basic-button'
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <ShoppingCartIcon />
          <Typography variant='h5' sx={{mx: 2}}>{numItems ? numItems : '0'}</Typography>
          </IconButton>
        </Toolbar>
      <NavMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
      </AppBar>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    numItems: state.cart.numItems
  }
};

export default connect(mapStateToProps)(Nav);