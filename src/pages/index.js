import React, {useState} from "react"

import {Container, Background, Layout, Header, Hero, Column, Projects, Form} from '../components'
import {motion} from 'framer-motion'
import styled from '@emotion/styled'
import {theme, media} from '../styles'

const {gradient} = theme

const IndexPage = () => {
  const [isActive, toggleActive] = useState(false);


  return (
    <Layout>

      <Background >
        <Header isActive={isActive} toggleActive={toggleActive} />
        <Container paddingTop="150px">
         <Hero />

        </Container>
        <MotionDiv
           className={isActive ? 'active': ''}
            animate={isActive ?  {y: 0, opacity:1} : {y: 850, opacity: 0}}
            initial={{y: 800}}
            transition={{ease: 'easeOut', duration: .3}}
          >
            <div>
              <h3>Home</h3>
              <h3>About</h3>
              <h3>Projects</h3>
              <h3>Experience</h3>
              <h3>Contact</h3>
            </div>
          </MotionDiv>
      </Background>
      <Background reverse="true">
        <Container>
          <Column beforeContent="About Me" src="about-me.png">
          <p className="gradeintP">I’m a full stack Web/Ux Developer. My belief is that a good project is defined by the experience of it’s clients. My passion is to make these experiences better and more beautiful.</p>
          </Column>
        </Container>
      </Background>


      <Background transparent>
        <H2>Projects</H2>
        <Projects ></Projects>
      </Background>


      <Background transparent reverse="true">
        <Container noBg="true">
          <Column  reverse="true" src="contactme.png">
          <h2>Contact Me</h2>
          <Form />

          </Column>
        </Container>
      </Background>

    </Layout>
  )
}

export default IndexPage


const H2 = styled.h2`
  ${media.small} {
    padding-top: 50px;
  }
`


const MotionDiv = styled(motion.div)`
  background: ${gradient.reverse};
  position: fixed;
  right: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  text-align: center;
  top: 137px;

  h3 { display: none;}

  &.active {
    height: 100vh;
    width: 100%;

    h3 {
      display: block;
      cursor: pointer;
      color: white;
      margin: 20px;
      border-bottom: none;
      transition: .2s;


      &:hover {
        transform: scale(1.1);
      }
    }
  }


`

