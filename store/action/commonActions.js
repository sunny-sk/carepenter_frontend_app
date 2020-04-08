export const GET_PHONE_NUMBERS = 'GET_PHONE_NUMBERS';
export const CONTACT_US = 'CONTACT_US';

import axios from 'axios';
import Url from './../../app/constants/Url';

export const getPhoneNumbers = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get(Url.getPhoneNumbers);
      return result.data;
      // dispatch({type: GET_PHONE_NUMBERS, data: result.data.categories});
    } catch (error) {
      throw new Error('server error');
    }
  };
};
export const contactUs = (data) => {
  return async (dispatch) => {
    try {
      const result = await axios.post(Url.contactUs, {
        name: data.name,
        email: data.email,
        message: data.message,
      });
      return result.data;
    } catch (error) {
      throw new Error(error.data.message);
    }
  };
};
