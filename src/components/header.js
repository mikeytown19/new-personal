import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from '@emotion/styled'
import {theme} from '../styles/theme'
import Logo from '../images/logo.svg'
import { motion } from 'framer-motion'
import { Example } from "./navigation/example";

const {colors, maxWidth} = theme;

export const Header = ({ siteTitle }) => (
  <StyledHeader>
    <HeaderContainer>
        <div>
          <Link to="/">
            <img src={Logo} alt=''/>
          </Link>

        </div>

    </HeaderContainer>

  </StyledHeader>
)

const StyledHeader = styled.header`
background: white;
`
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding-top: 20px;
`





