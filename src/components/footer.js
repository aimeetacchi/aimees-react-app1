import React from 'react'
import styled from 'styled-components'

const FooterStyles = styled.footer`
  text-align: center;
  padding: 2em;
  color: #F0F5F9;
  background-color: #52616B;
`;

 const Footer = () => {
  return (
    <FooterStyles>
      Footer Component. Web App made with love
    </FooterStyles>
  )
}
export default Footer;