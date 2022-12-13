import React from 'react'
import styled from "styled-components"
import { SearchContainer, SearchInput } from './ContactList';

const Container = styled.div`
    display: flex;
    flex-direction:column;
    height: 100%;
    width:70%;
    background: #f6f7f8;
`;

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  padding: 10px;
  align-items: center;
  gap:10px;
`
const ProfileImage = styled.img`
    width:32px;
    height: 32px;
    border-radius: 50%;
`;

const ChatBox = styled.div`
  display: flex;
  background:#f0f0f0;
  padding:10px;
  align-items: center;
  bottom:0;
`;

const EmojiImage = styled.img`
  width:28px;
  heoght:28px;
`;


export const Conversation = () => {
  return (
    <Container>
      <ProfileHeader>
        <ProfileImage src="/profile/elon.jpeg"/>
        Tarun Tailor
      </ProfileHeader>
      <ChatBox>
        <SearchContainer>
          <EmojiImage src={"/data.svg"}></EmojiImage>
          <SearchInput placeholder="Type a message"></SearchInput>
        </SearchContainer>
      </ChatBox>
    </Container>
  )
}
