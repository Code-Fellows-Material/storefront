import { nanoid } from 'nanoid';

const initialState = {
  cartList: [],
  itemTypesInCart: {},
  numItems: 0
}

const cartReducer = ( state = initialState, action) => {
  let {type, payload} = action;
  let decoupledPayload;
  if(payload){
    decoupledPayload = JSON.parse(JSON.stringify(payload));
  }
  
  switch (type) {

    case 'ADD_TO_CART':
      decoupledPayload.cartId = nanoid();

      if(!Object.keys(state.itemTypesInCart).includes(decoupledPayload.name)){
        state.itemTypesInCart[decoupledPayload.name] = 1;
      } else {
        state.itemTypesInCart[decoupledPayload.name] = state.itemTypesInCart[decoupledPayload.name] + 1;
      }
      
      return {...state, numItems: state.numItems + 1, cartList: [...state.cartList, decoupledPayload]};
      
    
    case 'REMOVE_FROM_CART':
        let tempArr = state.cartList.filter( i => i.name !== decoupledPayload.item.name);
        console.log(">>>>>>", decoupledPayload)

      return {...state, numItems: state.numItems - decoupledPayload.numberItemsInCart, cartList: tempArr};

      case 'INC_ONE':
        state.itemTypesInCart[decoupledPayload.name] = state.itemTypesInCart[decoupledPayload.name] + 1;

        
        return {...state, numItems: state.numItems + 1};

      case 'DEC_ONE':
        if(!Object.keys(state.itemTypesInCart).includes(decoupledPayload.name) || state.itemTypesInCart[decoupledPayload.name] === 0 ) return state;
        
        state.itemTypesInCart[decoupledPayload.name] = state.itemTypesInCart[decoupledPayload.name] - 1;

        
        return {...state, numItems: state.numItems - 1};

    default:
      return state;
  }
}

export const removeItemFromCart = (obj) => {
  console.log(obj)
  return {
    type: 'REMOVE_FROM_CART',
    payload: obj
  }
}

export const decOneItem = (item) => {
  return {
    type: 'DEC_ONE',
    payload: item
  }
}

export const incOneItem = (item) => {
  return {
    type: 'INC_ONE',
    payload: item
  }
}


export default cartReducer;