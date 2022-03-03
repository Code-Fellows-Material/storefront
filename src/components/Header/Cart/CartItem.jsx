import * as React from 'react';
import { connect } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ClearIcon from '@mui/icons-material/Clear';
import { Box } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { removeItemFromCart } from '../../../store/cart';
import { incOneItem, decOneItem } from '../../../store/cart';
import IconButton from '@mui/material/IconButton'

function CartItem({ item, removeItemFromCart, handleClose, totalInCart, numberItemsInCart, incOneItem, decOneItem }) {
  {console.log('IN CART Item:', item)}
  return (
    <Box>
      <MenuItem key={item.cartId} sx={{
            display: 'flex',
            direction: 'row',
            justifyContent: 'space-around'
          }}>
        <IconButton
          sx={{
            mx: 1,
            p: 1,
            color: 'red',
          }}
          onClick={() => {
            removeItemFromCart({item, numberItemsInCart, totalInCart: totalInCart - 1});
            console.log(totalInCart)
            if(totalInCart <= 1) handleClose();
          }}
        >
          <ClearIcon
            sx={{
              m: 0,
              p: 0,
              color: 'red',
            }}
          />
        </IconButton>
        <Typography sx={{
              marginRight: '20px',
            }}>{item.name} {numberItemsInCart}</Typography>
        <IconButton aria-label="" onClick={() => incOneItem(item)}>
          <AddIcon />
        </IconButton>
        <IconButton aria-label="" onClick={() => decOneItem(item)}>
          <RemoveIcon />
        </IconButton>
      </MenuItem>
      <Divider />
    </Box>
  );
}

const mapDispatchToProps = {
  removeItemFromCart,
  incOneItem,
  decOneItem
};

const mapStateToProps = (state) => {
  return {
    numItems: state.cart.numItems,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
