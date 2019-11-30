/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from '@emotion/styled'
import {GlobalStyles} from '../styles/global'

export const Layout = ({ children }) => {

  return (
    <LayoutStyles>
      <GlobalStyles />

        {children}

    </LayoutStyles>
  )
}


const LayoutStyles = styled.div`
  position: relative;
  overflow: auto;
`
