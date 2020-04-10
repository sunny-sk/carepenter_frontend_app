const initialState = {
  products: [],
};

import {GET_PRODUCTS} from '../action/productsAction';

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      let newProductsState = {...state};
      newProductsState.products = [...action.data];
      return {...newProductsState};
    default:
      return state;
  }
  // return {...state};
};

export default productReducer;
