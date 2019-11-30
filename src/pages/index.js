import React, {useState} from "react"

import {Container, Background, Layout, Header, Hero, Column, Projects} from '../components'
import {motion} from 'framer-motion'
import styled from '@emotion/styled'
import {theme} from '../styles'

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
              <h2>Item</h2>
              <h2>Item</h2>
              <h2>Item</h2>
              <h2>Item</h2>
              <h2>Item</h2>
            </div>
          </MotionDiv>
      </Background>
      <Background reverse="true">
        <Container>
          <Column beforeContent="About Me" src="about-me.png">
          <p>I’m a full stack Web/Ux Developer. My belief is that a good project is defined by the experience of it’s clients. My passion is to make these experiences better and more beautiful.</p>
          </Column>
        </Container>
      </Background>


      <Background transparent>
        <Projects ></Projects>
      </Background>

    </Layout>
  )
}

export default IndexPage



const MotionDiv = styled(motion.div)`
  background: ${gradient.reverse};
  position: fixed;
  right: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  top: 137px;

  h2 { display: none;}

  &.active {
    height: 100vh;
    width: 100%;

    h2 {
      display: block;
      cursor: pointer;
    }
  }


`

