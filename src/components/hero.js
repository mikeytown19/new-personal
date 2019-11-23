import React from 'react'
import styled from '@emotion/styled'
import {theme} from '../styles/theme'
import { motion } from "framer-motion"
import ScrollDown from '../images/scrolldown.svg'


const {colors, gradient} = theme


export const Hero = () => {

  return (

    <HeroContainer>
      <div className='exampleContainer'>

        <motion.div
            animate={{
              scale: [.8, 1.2, 1]
            }}>
          <h1>I'm Mike</h1>
          <h6>(I like to build stuff)</h6>
        </motion.div>

      </div>
        <Img src={ScrollDown} alt=''/>

      </HeroContainer>

  )
}


const HeroContainer = styled.div`
min-height: 60vh;
margin: auto;
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;

.exampleContainer {
  text-align: center;
}



h1 {
  margin-top: -75px;
}

h1, h6 {
  margin-bottom: 0;
  background: linear-gradient(to right, ${colors.orange} 0%, ${colors.pink} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`

const Img = styled.img`
  padding-top: 0px;
`