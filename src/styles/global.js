import React from 'react';
import { Global, css } from '@emotion/core'


export const GlobalStyles = () => (
  <Global
  styles={css`
  html, body {
    margin: 0;
    padding: 0;
  }

  * {
      box-sizing: border-box;
    }


  `}/>
)

