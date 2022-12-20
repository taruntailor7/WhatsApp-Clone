import React from 'react'
import styled from "styled-components";
// import { GoogleLogin } from 'react-google-login';
import GoogleLogin from 'react-google-login';

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
const Head = styled.span`
    padding:20px;
    font-size:16px;
`
const Instruction = styled.div`
    padding:20px;
    font-size:16px;
    color:#525252;
    ol{
        margin:40px 0px;
    }
    li{
        margin:15px 0;
    }
`
const Heading = styled.span`
    font-size:24px;
    color:#525252;
`
const QRCode = styled.img`
    width:350px;
    height:264px;
    background-color:white;
`

export const Login = () => {
    const handleResponseFromGoogle = (response)=>{
        console.log(response);
    }

    return (
        <Container>
            <Header>
                <Head>WhatsApp Web Clone</Head>
            </Header>
            <CardView>
                <Instruction>
                    <Heading>To use WhatsApp on your computer:</Heading>
                    <ol>
                        <li>You need to Signin using your Google Account.</li>
                        <li>You can anytime logout form the web.</li>
                        <li>Click on the sign in button to continue using the WhatsApp Clone.</li>
                    </ol>
                    <GoogleLogin
                        clientId="569591364082-2nlppfb3tvja16sol1gbp573il06kmue.apps.googleusercontent.com"
                        buttonText="Sign In with Google"
                        onSuccess={handleResponseFromGoogle}
                        onFailure={handleResponseFromGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </Instruction>
                <QRCode src="https://www.tech-recipes.com/wp-content/uploads/2020/07/feature-image.jpg"/>
            </CardView>
        </Container>
    )
}
