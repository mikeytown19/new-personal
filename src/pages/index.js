import React from "react"
import { Link } from "gatsby"
import {Container, Background, Layout, Header, Hero, Example} from '../components'
import styled from '@emotion/styled'

const IndexPage = () => (
  <Layout>
    <Background >
      <Header />
        <Example />
      <Container paddingTop="150px">
       <Hero />

      </Container>
    </Background>
    <Background reverse="true">
    </Background>
  </Layout>
)

export default IndexPage
