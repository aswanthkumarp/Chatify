import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { registerRoute } from '../utils/apiRoutes';

function Register() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const toastConfig = {
    position: 'top-left',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('chatify-user')) {
      navigate('/');
    }
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (handleValidation()) {
      const { username, email, password } = values;
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastConfig);
      }
      if (data.status === true) {
        if (data.user) {
          localStorage.setItem('chatify-user', JSON.stringify(data.user));
          navigate('/setavatar');
        } else {
          toast.error('Invalid user data returned', toastConfig);
        }
      }
    }
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleValidation = () => {
    const { username, email, password, confirmPassword } = values;
    if (password !== confirmPassword) {
      toast.error('Passwords dont match', toastConfig);
      return false;
    } else if (username.length < 3) {
      toast.error('Username should be more than 3 character', toastConfig);
      return false;
    } else if (password.length < 6) {
      toast.error('Password should be more than 6 character', toastConfig);
      return false;
    } else if (email == '') {
      toast.error('Email is required'.toastConfig);
      return false;
    }

    return true;
  };

  return (
    <>
      <div className='h-screen w-screen flex flex-col justify-center items-center gap-4 bg-[#d8dee9]'>
        <div className='flex items-center gap-4'>
          <img src={Logo} alt='logo' className='h-20' />
          <h1 className='text-black uppercase'>Chatify</h1>
        </div>
        <form
          className='flex flex-col gap-8 bg-[#3b4252] bg-opacity-75 rounded-3xl p-12'
          onSubmit={handleSubmit}
        >
          <input
            type='text'
            placeholder='Username'
            name='username'
            onChange={(e) => handleChange(e)}
            className=' px-4 py-2 border border-purple-600 rounded text-black w-full'
          />
          <input
            type='email'
            placeholder='Email'
            name='email'
            onChange={(e) => handleChange(e)}
            className=' px-4 py-2 border border-purple-600 rounded text-black w-full'
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            onChange={(e) => handleChange(e)}
            className='px-4 py-2 border border-purple-600 rounded text-black w-full'
          />
          <input
            type='password'
            placeholder='Confirm Password'
            name='confirmPassword'
            onChange={(e) => handleChange(e)}
            className='px-4 py-2 border border-purple-600 rounded text-black w-full'
          />
          <button
            type='submit'
            className='bg-purple-900 text-black px-8 py-4 font-bold cursor-pointer rounded uppercase'
          >
            Create User
          </button>
          <span className='text-black uppercase'>
            Already have an account ?{' '}
            <Link to='/login' className='text-purple-900 font-bold'>
              Login.
            </Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default Register;
