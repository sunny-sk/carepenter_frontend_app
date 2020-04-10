export const GET_CATEGORIES = 'GET_CATEGORIES';

import axios from 'axios';
import Url from './../../app/constants/Url';

export const getCategories = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get(Url.getAllCategory);
      dispatch({type: GET_CATEGORIES, data: result.data.categories});
    } catch (error) {
      throw error;
    }
  };
};
