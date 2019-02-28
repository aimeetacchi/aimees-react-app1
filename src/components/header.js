import React, { Component } from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    padding: 4em;
    text-align: center;
    color: #F0F5F9;
    background: #1e2022;
    `;

class Header extends Component {
    
  render() {

    return (
      <HeaderContainer>
        <h1>{this.props.title}</h1>
      </HeaderContainer>
    )
  }
}

export default Header