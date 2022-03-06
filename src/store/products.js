import axios from 'axios';

// CF Live URL
const PRODUCT_URL = 'https://api-js401.herokuapp.com/api/v1/products'

const initialState = {
  products: [],
}

const productReducer = ( state = initialState, action) => {
  let {type, payload} = action;
  
  switch (type) {

    case 'SET_PRODUCTS':

      return { products: payload.results};

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

const setProducts = (data) => {
  return {
    type: 'SET_PRODUCTS',
    payload: data
  }
}

export const getProducts = async (dispatch, getState) => {
  let response = await axios.get(PRODUCT_URL);
  let data = response.data;
  dispatch(setProducts(data));
}


export default productReducer;