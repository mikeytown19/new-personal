import React from 'react';
import { Global, css } from '@emotion/core'


export const GlobalStyles = () => (
  <Global
  styles={css`

  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,600&display=swap');


  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }

  * {
      box-sizing: border-box;
    }

    h1 {
      font-size: 64px;
    }

    h6 {
      font-size: 24px;
      margin: 0;
    }


  `}/>
)

