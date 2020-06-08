import styled from 'styled-components'

const StyledProductInput = styled.input`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  outline: none; 
  height: ${props => props.height};
  width: ${props => props.width};
  background: #F8F8FF;
  border: solid #EFEFF4;  
  border-radius: 10px;
  margin: 30px;
  box-shadow: 1px 1px 10px 0 rgba(100, 100, 100, .3);
  transition: all 0.3s ease; 
  
  :focus {
    border-color: #00b300;
  }
`

export default StyledProductInput