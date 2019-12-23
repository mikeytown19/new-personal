import React, {useState} from 'react'
import styled from '@emotion/styled'
import {motion, useCycle} from 'framer-motion'
import {theme, media} from '../styles'


export const Navigation = ({isActive, toggleActive}) => {

  const variants = {
    active: {
      backgroundColor: '#2CF6B3',
    },
    inactive: {
      backgroundColor: '#5158BB',
      cursor: 'pointer',
      transition: {
        duration: .3
      }
    }
  }

  return (
    <NavigationMenu>
          <HamburgerStyles
          className={isActive? 'change': ''}
             onClick={()=>toggleActive(!isActive)}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </HamburgerStyles>
      </NavigationMenu>
  )
}

const HamburgerStyles = styled.div`
    display: block;
    cursor: pointer;
    position: absolute;
    z-index: 1000;
    .bar1, .bar2, .bar3 {
      width: 35px;
      height: 5px;
      background-color:  ${props =>
      props.scrolled ? '#3e5f77' : '#FE7BA4'};
      margin: 6px 0;
      transition: 0.4s;
    }
    &.change .bar1 {
      -webkit-transform: rotate(-45deg) translate(-9px, 6px);
      transform: rotate(-45deg) translate(-9px, 6px);
    }
    &.change .bar2 {opacity: 0;}
    &.change .bar3 {
      -webkit-transform: rotate(45deg) translate(-8px, -8px);
      transform: rotate(45deg) translate(-8px, -8px);
    }

`

const NavigationMenu = styled.div`
height: 39px;
width: 39px;
position: relative;

`