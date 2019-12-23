import React from 'react';
import styled from '@emotion/styled'
import {theme, media} from '../styles'
const {colors, gradient} = theme

export const Background = ({children, reverse, transparent}) => {
    return (
      <GradientBG reverse={reverse}>
        <GradientInsideWhite transparent={transparent}>
        {children}
        </GradientInsideWhite>
      </GradientBG>

    )
}

const GradientBG = styled.div`

h2 {
  text-align: center;
  color: white;
}
position: relative;
background: ${props => props.reverse ? gradient.reverse : gradient.default };

${media.small} {
  padding: 0;
}
`

const GradientInsideWhite = styled.div`
background-color: ${props => props.transparent ? 'transparent' : colors.white };
height: 10%;
color: white;

`