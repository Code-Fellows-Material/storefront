

const initialState = {
  categories: ['people', 'catPeoples'],
  activeCategory: null,
  products: [{
    name: 'Cat Yums',
    category: 'catPeoples'
  },
  {
    name: 'Hooman Yums',
    category: 'people'
  }],
  showActiveCategory: false
}

const stateReducer = ( state = initialState, action) => {
  let {type, payload} = action;
  
  switch (type) {

    case 'CHANGE_CATEGORY':
      
      return {...state, activeCategory : payload};

    case 'ACTIVATE_CATEGORY':
      return {...state, showActiveCategory : !state.showActiveCategory};
  
    default:
      return state;
  }
}

export const changeCategory = (cat) => {
  return {
    type: 'CHANGE_CATEGORY',
    payload: cat
  }
}

export const activateCategory = () => {
  return {
    type: 'ACTIVATE_CATEGORY',
    payload: null
  }
}

export default stateReducer;