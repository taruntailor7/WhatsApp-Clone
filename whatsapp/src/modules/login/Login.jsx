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
const CardView = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: 30px 50px;
    margin-left: auto;
    margin-right: auto;
    margin-top: -80px;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 40px;
    flex-wrap: wrap;
    color:black; 
`

export const Login = () => {
  return (
    <Container>
        <Header>WhatsApp Web Clone</Header>
        <CardView>Hello</CardView>
    </Container>
  )
}
