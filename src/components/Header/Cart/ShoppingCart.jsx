import React, {useState} from 'react';
import Menu from '@mui/material/Menu';
import CartItem from './CartItem';
import { connect } from 'react-redux';

function NavMenu({ anchorEl, open, handleClose, cartList, itemTypesInCart }) {

let itemList = [];

  cartList.forEach((item) => {
    let noMatch = true;
    itemList.forEach(itemListItem => {
      if(itemListItem.name === item.name) noMatch = false; 
    })    
    if(noMatch) itemList.push(item); 
  })

  console.log('Hi', itemList)

  return (
    <Menu
      id='basic-menu'
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      
      {itemList.map((item) => {
            return <CartItem key={item.cartId} item={item} handleClose={handleClose} numberItemsInCart={itemTypesInCart[item.name]} totalInCart={itemList.length} />
      })}
    </Menu>
  );
}

const mapStateToProps = (state) => {
  return {
    cartList: state.cart.cartList,
    itemTypesInCart: state.cart.itemTypesInCart,
  };
};

export default connect(mapStateToProps)(NavMenu);
