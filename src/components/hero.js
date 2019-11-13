import React from 'react'
import styled from '@emotion/styled'
import {theme} from '../styles/theme'


const {colors, gradient} = theme

export const Hero = () => {
  return (

    <HeroContainer>
      <h1>I'm Mike</h1>

      <h6>(I like to build stuff)</h6>
      </HeroContainer>

  )
}


const HeroContainer = styled.div`
min-height: 60vh;
margin: auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

h1 {
  margin-top: -75px;
}

h1, h6 {
  margin-bottom: 0;
  background: linear-gradient(to right, ${colors.orange} 0%, ${colors.pink} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`