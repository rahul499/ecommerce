

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signout } from '../actions/userActions';


const UserProfile = (props) => {

const userSignin = useSelector(state=> state.userSignin);
const {userInfo} = userSignin;
const dispatch = useDispatch();
const signoutHandler = () => {
  dispatch(signout());
};
    
  return (
       <div className="form">
      <form>
          <ul className="form-container">
            <li>
            <center>  <h2> Your Profile </h2>  </center>
            </li>
            
            <li>
                <label htmlFor="name">
                    Name
                </label>
                <input
                type="name" name="name" id="name" 
                value={userInfo.name} disabled="disabled">   
                </input>
            </li>

            <li>
                <label htmlFor="email">
                    Email
                </label>
                <input
                type="email" name="email" id="email" 
                disabled="disabled" value={userInfo.email}>   
                </input>
            </li>

            <li>
                <label htmlFor="mobile">
                    Mobile Number
                </label>
                <input
                type="mobile" name="mobile" id="mobile" 
                disabled="disabled" value={userInfo.mobile}>   
                </input>
            </li>

            <li>
                <label htmlFor="joined">
                    Joining Date
                </label>
                <input
                type="joined" name="joined" id="joined" 
                disabled="disabled" value={userInfo.joined}>   
                </input>
            </li>

            <li>
               <Link to ="#signout"
               onClick={signoutHandler}
               className="button primary">
                  <center>Sign Out</center>
               </Link>
            </li>

          </ul>
        </form>
      </div>
    );        
}

export default UserProfile;

