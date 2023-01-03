import axios from 'axios';
import React, { useState } from 'react';
import { FaUserAstronaut } from 'react-icons/fa';

const Login = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitFormData = (event) => {
    // event.preventDefault();

    const newUser = {
      firstName,
      lastName,
      address,
      email,
      password,
    };

    axios.post('/login', newUser);

    // reset states
    // setFirstName('');
    // setLastName('');
    // setAddress('');
    // setEmail('');
    // setPassword('');
  };

  return (
    <div className='wrapper fadeInDown'>
      <div id='formContent'>
        <div className='fadeIn first'>
          <FaUserAstronaut
            style={{
              fontSize: '2.5rem',
              alignSelf: 'center',
              cursor: 'pointer',
              margin: 30,
            }}
          />
        </div>

        <form
          onSubmit={submitFormData}
          action="{{ url('/feed') }}"
          method='GET'
        >
          {/* first name */}
          <input
            type='text'
            id='firstName'
            className='fadeIn second'
            name='firstName'
            placeholder='first name'
            onChange={(e) => setFirstName(e.target.value)}
          />
          {/* last name */}
          <input
            type='text'
            id='lastName'
            className='fadeIn second'
            name='lastName'
            placeholder='last name'
            onChange={(e) => setLastName(e.target.value)}
          />
          {/* password */}
          <input
            type='text'
            id='pw'
            className='fadeIn third'
            name='pw'
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* city */}
          <input
            type='text'
            id='address'
            className='fadeIn third'
            name='address'
            placeholder='address'
            onChange={(e) => setAddress(e.target.value)}
          />
          {/* email */}
          <input
            type='text'
            id='email'
            className='fadeIn third'
            name='email'
            placeholder='email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='submit'
            className='fadeIn todo-button'
            style={{ marginTop: 20 }}
            value='Sign Up'
            href='/feed'
          />
        </form>

        <div id='formFooter'>
          <a className='underlineHover' href='#'>
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
