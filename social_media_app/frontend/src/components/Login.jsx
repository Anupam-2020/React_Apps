import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './Login.css';
import { getSingleUserData, getUserBlogs, registerUser } from '../store/fetchBackendUserSlice';
import {useNavigate} from 'react-router-dom';
import { action } from '../store/logingSlice';

const Login = () => {
  const naviagte = useNavigate();
  const {isRegistered} = useSelector(state => state.checkLogin);
  const userData = useSelector(state => state.userData)
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const inputHandler = (event) => {
    setData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    !isRegistered ? dispatch(getSingleUserData({
      email: data.email,
      password: data.password,
      name: data.name
    })) : dispatch(registerUser({
      email: data.email,
      password: data.password,
      name: data.name
    }));

    setData({
      name: '',
      email: '',
      password: ''
    });

    if(userData.data) {
      if(userData.data.user) {
        if(isRegistered) {
          dispatch(action.isRegistered(false));
          naviagte('/login')
        } else {
          dispatch(getUserBlogs(userData));
          naviagte('/myBlogs');
        }
        // isRegistered ? naviagte('/login') :naviagte('/myBlogs')
      } else {
        console.log('User not found');
      }
    }
  }

  return (
    <form className='form' onSubmit={onSubmitHandler}>
      {isRegistered ? <input onChange={inputHandler} name='name' placeholder='enter name' value={data.name}/> : null}
      <input onChange={inputHandler} size={30} name='email' placeholder='enter email' value={data.email}/>
      <input onChange={inputHandler} size={30} name='password' placeholder='enter password' value={data.password}/>
      <button className='formButton'>{!isRegistered ? 'Login' : 'Register'}</button>
    </form>
  )
}

export default Login;