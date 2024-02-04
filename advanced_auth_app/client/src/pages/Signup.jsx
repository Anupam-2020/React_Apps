import { useState } from 'react';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setFormData((formData) => ({ ...formData, [e.target.id]: e.target.value }))
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const userData = await fetch('/api/auth/sign-up', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await userData.json();
      console.log(data);
      setLoading(false);
      if(data.success === false) {
        setError(true)
        return;
      }
      navigate('/sign-in')
    } catch (err) {
        setLoading(false);
        setError(true);
        console.log(error);
    }
  }

  return (
    <div className='signupParent'>
      <h2 className='signup'>Sign Up</h2>
      <form action="post" className='signupForm'>
        <input type="text" placeholder="Username" id='userName' onChange={inputHandler} />
        <input type="email" placeholder="Email" required id='email' onChange={inputHandler} />
        <input type="password" required placeholder="Password" id='password' onChange={inputHandler} />
        <button disabled={loading} onClick={submitHandler}>{loading ? 'Loading...' : 'Sign Up'}</button>
      </form>
      <div className='belowDiv'>
        <p>Already have an account ?</p>
        <Link to={'/sign-in'}>
          <span>Sign In</span>
        </Link>
      </div>
      <p>{error && 'Something went wrong'}</p>
    </div>
  )
}

export default Signup;