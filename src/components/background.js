import React from 'react';
import styled from '@emotion/styled'
import {theme} from '../styles/theme'


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

position: relative;
padding: 30px;
min-height: 50vh;
background: ${props =>
   props.reverse ? gradient.reverse : gradient.default };
`

const GradientInsideWhite = styled.div`
background-color: ${props => props.transparent ? 'transparent' : colors.white };
height: 10%;
`