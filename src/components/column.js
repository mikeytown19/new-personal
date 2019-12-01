import React from 'react'
import styled from '@emotion/styled'
import {theme} from '../styles'
import Image from './image'
const {colors} = theme

export const Column =  ({children, src, beforeContent, reverse}) => {

  return (
    <ColumnStyles reverse={reverse}>
    {beforeContent ? <h2 className="beforeH2">{beforeContent}</h2> : null}
      <div reverse={reverse} className='flex'>
       <div className='children'>
        {children}
       </div>
        <Image src={src} />
      </div>
    </ColumnStyles>
  )
}

const ColumnStyles = styled.div`
    .flex {
      display: flex;
      padding: 0 30px;
      justify-content: space-around;
      padding-bottom: 50px;
      flex-wrap: wrap;
      flex-direction: ${props => props.reverse? 'row-reverse': 'row'};
      .children {
        max-width: 500px;
        padding-top: 50px;

        p {
        color: white;
        }

        .gradeintP {
          background: linear-gradient(to right, ${colors.orange} 0%, ${colors.pink} 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
        }
      }

    }

    .beforeH2 {
      margin-bottom: 0;
      background: linear-gradient(to right, ${colors.orange} 0%, ${colors.pink} 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-align: center;
    }

  .gatsby-image-wrapper {
    width: 100%;
    flex: 1;
    max-width: 300px;
    min-width: 150px;
  }
`