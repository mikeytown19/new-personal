import React from 'react';
import { Global, css } from '@emotion/core'


export const GlobalStyles = () => (
  <Global
  styles={css`

  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,600&display=swap');

  * {
  box-sizing: border-box;
  font-family: ".SFNSText", "SFProText-Regular", "SFUIText-Regular", ".SFUIText",
    Helvetica, Arial, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }



    h1 {
      font-size: 64px;
    }

    h2 {
      font-size: 52px;
    }

    h3 {
      font-size: 36px;
    }

    h6 {
      font-size: 24px;
      margin: 0;
    }

    p {
      font-size: 18px;
    }


  `}/>
)

