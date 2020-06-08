import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const ArrowContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-left: 25px; 
`

const StyledArrow = styled(FontAwesomeIcon)`
  color: white;
  font-size: 25px;

  &:hover{
    cursor: pointer;
    color: #FFFFF0;
    font-size: 28px; 
  }
`

const ReturnArrow = props => {
  const { returnPage } = props
  return (
    <>
      <ArrowContainer>
        <StyledArrow icon={faArrowLeft} onClick={()=> returnPage()}/>
      </ArrowContainer>
    </>
  )
}

export default ReturnArrow