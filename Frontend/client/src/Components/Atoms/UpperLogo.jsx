import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCampground } from '@fortawesome/free-solid-svg-icons'


const LogoContainer = styled.div `
  display: flex; 
  flex-direction: row; 
  justify-content: flex-start;
  align-items: center;
  margin-left: 15px;
  margin-top: 15px;
  width: 25%;    
`

const TextContainer = styled.div `
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 200;
  color: #F5F5F5;
`

const StyledIcon = styled(FontAwesomeIcon)`
  color: #F5F5F5;
  font-size: 35px;
  margin: 10px; 
`

const UpperLogo = () => {
  return (
    <>
      <LogoContainer>
        <StyledIcon icon={faCampground}/>
        <TextContainer>
          Camping Products
        </TextContainer>
      </LogoContainer>
    </>
  )

}

export default UpperLogo