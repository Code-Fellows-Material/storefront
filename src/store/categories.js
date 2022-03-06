import axios from 'axios';

// CF Live URL
const CAT_URL = 'https://api-js401.herokuapp.com/api/v1/categories'


const initialState = {
  categories: [],
  categoryCount: 0,
  activeCategory: null,
  showActiveCategory: false
}

const categoryReducer = ( state = initialState, action) => {
  let {type, payload} = action;
  
  switch (type) {

    case 'SET_CATEGORIES':
      
      return {...state, categories: payload.results, categoryCount: payload.count};

    case 'CHANGE_CATEGORY':
      
      return {...state, activeCategory : payload};

    case 'ACTIVATE_CATEGORY':
      return {...state, showActiveCategory : !state.showActiveCategory};
  
    default:
      return state;
  }
}

const setCategories = (data) => {
  return {
    type: 'SET_CATEGORIES',
    payload: data
  }
}

export const get_categories = async (dispatch, getState) => {
  const response = await axios.get(CAT_URL);
  const data = response.data;
  
  dispatch(setCategories(data))
}

export const changeCategory = (category) => {
  return {
    type: 'CHANGE_CATEGORY',
    payload: category
  }
}

export const activateCategory = () => {
  return {
    type: 'ACTIVATE_CATEGORY',
    payload: null
  }
}

export default categoryReducer;