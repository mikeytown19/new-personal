import React from "react"
import { Link } from "gatsby"

import styled from '@emotion/styled'

import Logo from '../images/logo.svg'

import { Example } from "./navigation/example";



export const Header = () => (
  <StyledHeader>
    <HeaderContainer>
        <div>
          <Link to="/mikes">
            <img src={Logo} alt=''/>
          </Link>

        </div>

        <Example />

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





