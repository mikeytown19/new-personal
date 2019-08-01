/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from '@emotion/styled'
import {GlobalStyles} from '../styles/global'

export const Layout = ({ children }) => {

  return (
    <div>
      <GlobalStyles />

        {children}

    </div>
  )
}
