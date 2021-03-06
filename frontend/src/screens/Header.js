import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = (props) => {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
    
  const userSignin = useSelector(state=> state.userSignin);
  const {userInfo} = userSignin;
   
    return(
        <div>
        <header className="header">
        <div className="brand">
          <button onClick={openMenu}>
            &#9776;
          </button>
          <Link to = "/" >HOTPICKS</Link>
        </div>
        <div className="header-links">
        <Link to = "/cart/:id?">Bucket</Link>
        {
          userInfo ?
          <Link to= "/profile">{userInfo.name}</Link>
          :
          <Link to="/signin">Sign In</Link>
        } 
        </div>
        </header>
        <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
          <li>
            <a href="index.html">Pants</a>
          </li>
  
          <li>
            <a href="index.html">Shirts</a>
          </li>
          </ul>
          </aside>
      </div>
    );  
}
 
export default  Header;