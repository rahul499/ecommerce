
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { signin } from '../actions/userActions';
import { useSelector, useDispatch } from 'react-redux';


const SignIn = (props) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state=>state.userSignin);
    const { loading, userInfo, error } = userSignin;

    const dispatch = useDispatch();

    useEffect(() => {
      if(userInfo) {
        props.history.push("/");
      }
      return () => {
        //
      };
    }, [userInfo]);
     
     const  onEmailChange = (event) => {
         event.preventDefault();
        setEmail(event.target.value); 
       }
     
     const  onPasswordChange = (event) => {
         event.preventDefault();
         setPassword(event.target.value); 
       }
       

      const onsubmitSignIn = (event) => {
         event.preventDefault();
         dispatch(signin(email, password));
       }

    
  return (
       <div className="form">
      <form>
          <ul className="form-container">
            <li>
                <h2> Sign-In </h2>
            </li>
            <li>
              { loading && <div>Loading...</div> }
              { error && <div>Wrong email or Password</div>}
            </li>
            <li>
                <label htmlFor="email">
                    Email
                </label>
                <input
                onChange={onEmailChange}
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
                onClick = {onsubmitSignIn}
                type="submit" className="button primary">
                    SignIn
                </button>
            </li>

            <li>
                New to HotPicks?
            </li>

            <li>
                <Link to = "/register" className="button secondary text-center">Create your Hotpicks account</Link>
            </li>

          </ul>
        </form>
      </div>
    );        
}

export default SignIn;

