import React from "react"
import { Link } from "gatsby"
import Sticky  from 'react-sticky-el'
import styled from '@emotion/styled'
import Logo from '../images/logo.svg'
import {Navigation} from './navigation'


import { media} from '../styles'


export const Header = ({isActive, toggleActive}) => (
    <StyledHeader>
      <StickyStyles mode="top">
        <HeaderContainer>
            <div>
              <Link to="/mikes">
                <img src={Logo} alt=''/>
              </Link>
            </div>

            <Navigation isActive={isActive} toggleActive={toggleActive} />

        </HeaderContainer>
    </StickyStyles>
  </StyledHeader>


)

const StickyStyles=styled(Sticky)`
z-index: 1000;
background: white;
transition: border-bottom .3s;

&.sticky {
  border-bottom: solid tomato 2px;
}
`
const StyledHeader = styled.header`
  background: white;
  width: 100%;
  z-index: 100;
`
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 20px;

    ${media.medium} {
      padding: 20px;
    }

    ${media.small} {
      img {
        max-width: 75px;
      }
    }

`





