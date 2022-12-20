import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #0a0e11;
    height: 100vh;
    color:white; 
`

const Header = styled.div`
    color:white;
    width:100%;
    font-weight:bold;
    background-color: #56bca6;
    padding: 50px 0px 140px 0px;
    font-size: 14px;
`

export const Login = () => {
  return (
    <Container>
        <Header>WhatsApp Web Clone</Header>
    </Container>
  )
}
