import Axios from 'axios';
import { CART_EMPTY } from '../constants/cartConstants';
import {
  ORDER_CREATE_FAIL,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS
} from '../constants/orderConstants';

const createOrder = ({toPrice}) => async (dispatch) => {
   
    dispatch({ type: ORDER_CREATE_REQUEST, payload: {toPrice}});

    try {
       const {data} = await Axios.post("http://localhost:5000/createorder", {toPrice});
       dispatch({ type: ORDER_CREATE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: ORDER_CREATE_FAIL, 
           payload:
            error.message && error.response.data.message
            ? error.response.data.message: error.message
        });
    }
}

export { createOrder };
