import React, { useState } from 'react';
import '../css/form.css';
import {checkPassword, validateEmail } from '../utils/helpers';

function Form() {

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;


    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      return;
    }
    if (!checkPassword(message)) {
      setErrorMessage(
        `Please enter a message!`)
        return;
    
    
      }
    alert(`Hi ${userName}! got your message, I'll be in touch..`);

    setUserName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div>
      <p class ="hellomsg">Hey {userName}! Add your message and email address below</p>
      <form className="form">
       
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Your Name"
        />
         <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Your Email address"
        />
        <input class ="msgbox"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="message"
          placeholder="Your message"
        />
        <button class ="send" type="button" onClick={handleFormSubmit}>SEND</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
