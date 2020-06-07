import styled from 'styled-components'

const StyledInput = styled.input`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  outline: none; 
  height: 35px;
  width: 280px;
  background: #EFEFF4;
  border: solid #EFEFF4;  
  border-radius: 10px;
  margin: 10px;
  box-shadow: 1px 2px 20px 3px rgba(33, 27, 27, .4);
  transition: all 0.3s ease; 
  
  :focus {
    border-color: #00b300;
  }

  @media(max-width: 480px) {
    width: 180px;
    height: 32px; 
  }
`

export default StyledInput