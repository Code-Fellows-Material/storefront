import initialProducts from './initialProducts';

const initialState = {
  products: initialProducts,
}

const productReducer = ( state = initialState, action) => {
  let {type, payload} = action;
  
  switch (type) {

    case 'ADD_TO_CART':
      for(let item of state.products){
        if(item.name === payload.name){
          item.inventory--;
        }
      }
      
      return state;

    case 'REMOVE_FROM_CART':

      for(let item of state.products){
        if(item.name === payload.name){
          item.inventory++;
        }
      }
        
      return state;

    default:
      return state;
  }
}

export const addItemToCart = (item) => {
  return {
    type: 'ADD_TO_CART',
    payload: item
  }
}


export default productReducer;