import React from "react"
import { Link } from "gatsby"
import {Container, Background, Layout, Header, Hero, Example, Column} from '../components'
import styled from '@emotion/styled'

const IndexPage = () => (
  <Layout>
    <Background >
      <Header />
      <Container paddingTop="150px">
       <Hero />

      </Container>
    </Background>
    <Background reverse="true">
      <Container>
        <Column beforeContent="About Me" src="about-me.png">
        <p>I’m a full stack Web/Ux Developer. My belief is that a good project is defined by the experience of it’s clients. My passion is to make these experiences better and more beautiful.</p>
        </Column>
      </Container>
    </Background>

  </Layout>
)

export default IndexPage


