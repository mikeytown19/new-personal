
import React from 'react'
import styled from '@emotion/styled'
import {theme} from '../styles'
console.log(theme)

const {maxWidth} = theme;
export const Container = ({children, paddingTop, noBg}) => {

  return (
    <ContainerWrapper noBg={noBg} paddingTop={paddingTop}>
      {children}

    </ContainerWrapper>
  )
}

const ContainerWrapper = styled.div`
  max-width: ${maxWidth};
  background-color: ${props => props.noBg ? "transparent" : "white"};
  margin: auto;
  padding-top: ${props => props.paddingTop ? props.paddingTop : '20px'};
  position: relative;

`