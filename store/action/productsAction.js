export const GET_PRODUCTS = 'GET_PRODUCTS';

import axios from 'axios';
import Url from './../../app/constants/Url';

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get(Url.getAllProducts);
      dispatch({type: GET_PRODUCTS, data: result.data.products});
    } catch (error) {
      console.log(error);
      throw new Error('server error');
    }
  };
};
