import Axios from 'axios';
import Cookie from 'js-cookie';
import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_SIGNOUT } from '../constants/userConstants';

const signin = (email, password) => async (dispatch) => {
   
    dispatch({ type: USER_SIGNIN_REQUEST, payload: {email, password}});

    try {
       const {data} = await Axios.post("http://localhost:5000/signinuser", {email, password});
       dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
       localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ 
            type: USER_SIGNIN_FAIL,
            payload: 
            error.message && error.response.data.message
            ? error.response.data.message
            : error.message
         });
    }
}

const registerUser = (name, mobile, email, password) => async (dispatch) => {
   
    dispatch({ type: USER_REGISTER_REQUEST, payload: {name, mobile, email, password}});

    try {
       const {data} = await Axios.post("http://localhost:5000/registeruser", {name, mobile, email, password});
       dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
       dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
       localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: USER_REGISTER_FAIL, 
           payload:
            error.message && error.response.data.message
            ? error.response.data.message: error.message
        });
    }
}

const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('shippingAddress');
    dispatch({ type: USER_SIGNOUT });
    document.location.href = '/signin';
  };

export { signin, registerUser, signout };
