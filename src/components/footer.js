import React from 'react'
import styled from 'styled-components'

const FooterStyles = styled.footer`
  text-align: center;
  padding: 2em;
  background-color: #f1f1f1;
`;

 const Footer = () => {
  return (
    <FooterStyles>
      Footer Component. Web App made with love
    </FooterStyles>
  )
}
export default Footer;