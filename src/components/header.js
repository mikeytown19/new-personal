import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from '@emotion/styled'
import {theme} from '../styles/theme'
import Logo from '../images/logo.svg'

const {colors, maxWidth} = theme;

export const Header = ({ siteTitle }) => (
  <StyledHeader>
    <HeaderContainer>
        <div>
          <Link to="/">
            <img src={Logo} alt=''/>
          </Link>

        </div>
      <StyledHamburger>
        <div></div>
        <div></div>
        <div></div>

      </StyledHamburger>

    </HeaderContainer>

  </StyledHeader>
)

const StyledHeader = styled.header`
  color: ${colors.dark};
  margin: 30px;
  background-color: ${colors.white};
  position: absolute;
  top: 30px;
  width: calc(100% - 60px);
  left: 50%;
  transform: translate(-50%, 0);
  height: 130px;
  z-index: 100;
  padding: 20px;

  margin: auto;


`

const HeaderContainer = styled.div`
  max-width: ${maxWidth};
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: auto;

`

const StyledHamburger = styled.div`
height: 70px;
margin-top: auto;
cursor: pointer;
  div {
    background-color: ${colors.pink};
    height: 3px;
    max-width: 65px;
    width: 100%;
    margin-top: 5px;

    &:nth-of-type(1) {
      width: 65px;
    }

    &:nth-of-type(2) {
      width: 45px;
    }

    &:nth-of-type(3) {
      width: 25px;
    }

  }
`



