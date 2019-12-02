import React from 'react'
import styled from '@emotion/styled'
import {theme} from '../styles'

const {colors} = theme;


export const Form = () => {
  return (
    <StyledForm name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    <div data-netlify-recaptcha></div>
    <p className='hidden'>
      <input type="hidden" name="bot-field" />
    </p>
     <div className="field">
      <label className="label" for="fist_name">First Name</label>
      <div className="control">
        <input className="input" type="text"id="name" name="name" placeholder="First Name" />
      </div>
    </div>

    <div className="field">
      <label className="label" for="last_name">Last   Name</label>
      <div className="control">
        <input className="input" type="text"id="name" name="name" placeholder="Last Name" />
      </div>
    </div>


    <div className="field">
      <label className="label" for="email">Email</label>
      <div className="control">
        <input className="input" type="email" name="email"id="email"placeholder="Email" />
      </div>
    </div>


    <div className="field">
      <label className="label" for="number">Number</label>
      <div className="control">
        <input className="input" type="tel" id="number" name="number"placeholder="Phone Number" />
      </div>
    </div>

    <div className="field">
      <label className="label" for="message">Message</label>
      <div className="control">
        <textarea className="textarea" id="message" name="message"placeholder="Write us"></textarea>
      </div>
    </div>

    <div className="field is-grouped">

      <div className="control">
        <button type="submit" className="button is-primary">Submit</button>
      </div>

    </div>


  </StyledForm>
  )
}



const StyledForm = styled.form`
  label {
    color: ${colors.pink};
    display: none;
  }

  input, textarea {
    margin: 10px 0;
    border-radius: 3px;
    border: solid ${colors.white} 1px;
    padding: 8px 11px;
    -webkit-appearance: none;
    color: ${colors.white};
    background-color: transparent;
    width: 100%;
    max-width: 250px;
    font-size: 14px;
    &:focus {
      border: solid ${colors.white} 2px;
      outline: 0;
    }

    ::placeholder {
      color: white;
    }

  }

  button {
    -webkit-appearance: none;
    border-radius: 4px;
    font-size: 14px;
    padding: 8px 15px;
    margin: 5px 0px;
    background-color: ${colors.pink};
    color: ${colors.white};
    border: none;
    transition: background-color .2s;

    &:hover {
      cursor: pointer;
      background-color: ${colors.orange};
    }
  }

`