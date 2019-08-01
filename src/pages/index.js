import React from "react"
import { Link } from "gatsby"
import {Container, Background, Layout, Header} from '../components'
import styled from '@emotion/styled'

const IndexPage = () => (
  <Layout>
    <Background >
      <Header />
      <Container paddingTop="150px">
      </Container>
    </Background>
    <Background reverse="true">
    </Background>
  </Layout>
)

export default IndexPage
