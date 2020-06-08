import styled from 'styled-components'

const TopBannerContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: flex-start;
  width: 100%; 
  max-width: 1200px; 
  height: 180px; 
  background: #006600;

  @media(max-width: 600px) {
    height: 140px; 
  }
`

export default TopBannerContainer