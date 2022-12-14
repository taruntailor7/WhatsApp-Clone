import React, { useState } from 'react'
import styled from "styled-components"
import { SearchContainer, SearchInput } from './ContactList';
import {messagesList} from "../mockData"
import EmojiPicker from 'emoji-picker-react';

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
  opacity:0.4;
  cursor: pointer; 
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background:#e5ddd6;
  overflow-y:auto;
`;

const MessageDiv = styled.div`
  display: flex;
  justify-content:${(props) => (props.isYours ? 'flex-end': "flex-start")};
  margin:5px 15px;
`;

const Message = styled.div`
  background:${(props) => (props.isYours ? "#daf8cb": "white")};
  max-width:50%;
  color: #303030;
  padding: 8px 10px;
  font-size: 14px;
  border-radius:4px;
`;



export const Conversation = ({selectedChat}) => {
  const [text,setText] = useState("");
  const [pickerVisible, setPickerVisible] = useState(false);

  const onEmojiClick = (event,emojiObj)=>{
    setText(text+emojiObj.emoji);

  }


  return (
    <Container>
      <ProfileHeader>
        <ProfileImage src={selectedChat.profilePic}/>
        {selectedChat.name}
      </ProfileHeader>
      <MessageContainer>
        {messagesList.map((messageData) =>(
          <MessageDiv key={messageData.id} isYours={messageData.senderID === 0}>
            <Message isYours={messageData.senderID === 0}>{messageData.text}</Message>
          </MessageDiv>
        ))}
      </MessageContainer>
      <ChatBox>
        <SearchContainer>
          {pickerVisible && (<EmojiPicker width="100%" position="absolute" bottom="60px"  onEmojiClick={onEmojiClick} />)}
          <EmojiImage src={"/data.svg"} onClick={()=>setPickerVisible(!pickerVisible)}/>
          <SearchInput placeholder="Type a message" value={text} onChange={(e)=>setText(e.target.value)}></SearchInput>
        </SearchContainer>
      </ChatBox>
    </Container>
  )
}
