import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';

const INITIAL_STATE = {
  email: '',
  message: '',
  emailError: '',
  messageError: '',
  succesMessage: '',
  validate: false,
  count: 0,
}

export default function Contact() {
  const [state, setState] = useState(INITIAL_STATE);

  const validate = () => {
    const emailValidate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const messageValidate = /(.+){10,500}/;
    const { email, message } = state;

    if (!emailValidate.test(email)) {
      console.log('email invalid');
      setState({ ...state, emailError: 'Invalid email' });
      return false;
    }

    if (!messageValidate.test(message)) {
      console.log('message invalid');
      setState({ ...state, messageError: 'Message must have at least 10 characters', emailError: '' });
      return false;
    }

    setState({ 
      ...state,
      valid: true, 
      messageError: '',
      emailError: '',
    });
    return true;
  };

  useEffect(() => {
    setState({ ...state, count: state.message.length })
  }, [state.message])

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className="contact-page">
      <h1>Contact</h1>
      <div className="contact-container">
        <div className="contact-social">
          <ul>
            <li><a target="_blank" className="fab fa-linkedin" href="https://www.linkedin.com/in/ericksilvadev/" rel="noreferrer"></a></li>
            <li><a target="_blank" className="fab fa-github" href="https://github.com/ericksilvadev" rel="noreferrer"></a></li>
            <li><a target="_blank" className="fas fa-envelope" href="mailto:erick.silva6653@gmail.com" rel="noreferrer"></a></li>
            <li><a target="_blank"  className="fab fa-instagram" href="https://www.instagram.com/ericksilvadev/" rel="noreferrer"></a></li>
          </ul>
        </div>
        {state.succesMessage
        &&
        <div className="success-message">
          <p>{state.succesMessage}</p>
          <Button
            type="button"
            onClick={ () => {
                setState(INITIAL_STATE)
              }
            }
          >
            Send another message
          </Button>
        </div>
        }
        {!state.succesMessage && 
        <div className="contact-form">
          <h2>Get in touch</h2>
          <form>
            <div className="email-container">
              <input
                onChange={ handleChange }
                className={ state.emailError ? 'invalid' : '' }
                value={ state.email }
                name="email"
                type="text"
                placeholder="email@example.com"
              />
              { state.emailError && <p className="error-message">{state.emailError}</p> }
            </div>
            <div className="textarea-container">
              <textarea
                value={ state.message }
                onChange={ handleChange }
                className={ state.messageError ? 'invalid' : '' }
                name="message"
                placeholder="Your message here"
                maxLength="500"
              />
              <span className="message-counter">{ state.count }/500</span>
              { state.messageError && <p className="error-message">{state.messageError}</p> }
            </div>
            <Button
              type="submit"
              onClick={ (e) => {
                e.preventDefault();
                if (validate()) {
                  console.log('test');
                  setState({
                    ...INITIAL_STATE,
                    succesMessage: "Message sent, I'll answer you soon!",
                  })
                }
              } }
            >
              Submit

            </Button>
          </form>
        </div>
        }
      </div>
    </div>
  );
}
