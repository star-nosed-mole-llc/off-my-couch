import React from 'react';
import { FaUserAstronaut } from 'react-icons/fa';

const Login = () => {
  return (
    <div class='wrapper fadeInDown'>
      <div id='formContent'>
        <div class='fadeIn first'>
          <FaUserAstronaut
            style={{
              fontSize: '2.5rem',
              alignSelf: 'center',
              cursor: 'pointer',
              margin: 30,
            }}
          />
        </div>

        <form>
          <input
            type='text'
            id='username'
            class='fadeIn second'
            name='username'
            placeholder='username'
          />
          <input
            type='text'
            id='pw'
            class='fadeIn third'
            name='pw'
            placeholder='password'
          />
          <input
            type='submit'
            class='fadeIn todo-button'
            style={{ marginTop: 20 }}
            value='Log In'
          />
        </form>

        <div id='formFooter'>
          <a class='underlineHover' href='#'>
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
