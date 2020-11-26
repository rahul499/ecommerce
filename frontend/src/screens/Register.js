
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from '../actions/userActions';


const Register = (props) => {

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userRegister = useSelector(state=>state.userRegister);
    const { loading, userInfo, error } = userRegister;

    const dispatch = useDispatch();

    useEffect(() => {
      if(userInfo) {
        props.history.push("/");
      }
      return () => {
        //
      };
    }, [userInfo]);
     
  const onNameChange = (event) => {
    event.preventDefault();
    setName(event.target.value); 
  }
       
   const onMobileChange = (event) => {
    event.preventDefault();
    setMobile(event.target.value); 
   }  
        
    const  onEmailChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value); 
    }
     
    const onPasswordChange = (event) => {
    event.preventDefault();
    setPassword(event.target.value); 
    }    

    const onsubmitRegister = (event) => {
    event.preventDefault();
    dispatch(registerUser(name, mobile, email, password))
    }

    return ( <div className="form">
    <form>
        <ul className="form-container">
          <li>
              <h2> Register Here </h2>
          </li>
          <li>
              { loading && <div>Loading...</div> }
              { error && <div>Not able to register</div>}
            </li>
          <li>
              <label htmlFor="name">
                  Username
              </label>
              <input onChange = {onNameChange}
              type="text" name="name" id="name" required>   
              </input>
          </li>

          <li>
              <label htmlFor="mobile">
                  Phone Number
              </label>
              <input type="number"
              onChange = {onMobileChange} 
              pattern="\d{3}[\-]\d{3}[\-]\d{4}" required>  
              </input>
          </li>
          
          <li>
              <label htmlFor="email">
                  Email
              </label>
              <input 
              onChange = {onEmailChange}
              type="email" name="email" id="email" required>   
              </input>
          </li>
          
          <li>
              <label htmlFor="password">
                  Password
              </label>
              <input 
              onChange = {onPasswordChange}
              type="password" name="password" id="password" required>   
              </input>
          </li>

          <li>
              <button 
              onClick = {onsubmitRegister}
              type="submit" className="button primary">
                  Sign Up
              </button>
          </li>

          <li>
              Already have an account? <Link to = "/signin">Sign in</Link>
          </li>

         </ul>
       </form>
     </div>
   );      
}
export default Register;

