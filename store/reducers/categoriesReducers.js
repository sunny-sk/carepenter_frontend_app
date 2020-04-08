const initialState = {
  categories: [],
};

import {GET_CATEGORIES} from '../action/categoriesAction';

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      let newCategoryState = {...state};
      newCategoryState.categories = [...action.data];
      return {...newCategoryState};
    default:
      return state;
  }
  // return {...state};
};

export default categoryReducer;
