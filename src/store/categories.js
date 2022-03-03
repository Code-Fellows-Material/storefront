const initialState = {
  categories: [{
    normalizedName: 'cat toys',
    displayName: 'cat toys',
    description: 'For all your kitty fun needs!',
    id: 1
  }, {
    normalizedName: 'dog toys',
    displayName: 'dog toys',
    description: 'For all your doggy fun needs!',
    id: 2
  }],
  activeCategory: 'cat toys',
  showActiveCategory: false
}

const categoryReducer = ( state = initialState, action) => {
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