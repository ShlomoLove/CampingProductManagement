import styled from 'styled-components'

const StyledButton = styled.input`
  height: 35px;
  width: 160px;
  background: #00b300;
  color: #F5F5F5;
  font-family: 'Roboto';
  margin: 10px;
  font-size: 14px;
  border-radius: 5px; 
  letter-spacing: 0.35px;
  border: 0;
  box-shadow: 1px 2px 20px 3px rgba(33, 27, 27, .4);
  transition: all 0.6s ease;

  :focus {
    outline: none;
  }
  
  &:hover {
    background: #00ff00;
    cursor: pointer; 
  } 
`

export default StyledButton