import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { action } from '../store/logingSlice';

const Header = () => {
  const dispatch = useDispatch();
  const changeRegisterStatus = (event) => {
    // console.log(event);
    dispatch(action.isRegistered(event))
  }

  return (
    <nav className='navbar'>
      <div style={{display: 'flex'}}>
      <h2>Blog App</h2>
      <div style={{display: 'flex', marginLeft: '2rem', alignItems: 'center', paddingLeft: '2rem'}}>
        <Link to={'/blog/add'} style={{paddingRight: '2rem'}}>Add Blog</Link>
        <Link to={'/myBlogs'} style={{paddingRight: '2rem'}}>My Blogs</Link>
        <Link to={'/blogs'}>All Blogs</Link>
      </div>
      </div>
      <div>
        <Link onClick={() => changeRegisterStatus(false)} to={'/login'} className='navButton'>Login</Link>
        <Link onClick={() => changeRegisterStatus(true)} to={'/login'} className='navButton'>Register</Link>
      </div>
    </nav>
  )
}

export default Header;