import { useState } from 'react';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { actions } from '../store/userSlice';

const Signin = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {loading, error} = useSelector(state => state.user);

  const inputHandler = (e) => {
    setFormData((formData) => ({ ...formData, [e.target.id]: e.target.value }))
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(actions.signInStart());
      const userData = await fetch('/api/auth/sign-in', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await userData.json();
      console.log(data);
      dispatch(actions.signInStart(false));
      if(data.success === false)  {
        dispatch(actions.signInFailure(data))
        return;
      }
      dispatch(actions.signInSuccess(data))
      navigate('/')
    } catch (err) {
        dispatch(actions.signInFailure(err));
        console.log(err);
    }
  }

  return (
    <div className='signupParent'>
      <h2 className='signup'>Sign In</h2>
      <form action="post" className='signupForm'>
        <input type="email" placeholder="Email" required id='email' onChange={inputHandler} />
        <input type="password" required placeholder="Password" id='password' onChange={inputHandler} />
        <button disabled={loading} onClick={submitHandler}>{loading ? 'Loading...' : 'Sign In'}</button>
      </form>
      <div className='belowDiv'>
        <p>Dont have an account ?</p>
        <Link to={'/sign-up'}>
          <span>Sign Up</span>
        </Link>
      </div>
      <p>{error && error.message}</p>
    </div>
  )
}

export default Signin;