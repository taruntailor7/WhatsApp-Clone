import React, { useState } from 'react';
import styled from "styled-components";
import { SearchContainer, SearchInput } from './ContactList';
// import {messagesList} from "../mockData";
import EmojiPicker from 'emoji-picker-react';
import { createChannel } from '../managers/httpManager';

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
  const [message,setMessage] = useState([]);

  const onEmojiClick = (emojiObj)=>{
    setText(text+emojiObj.emoji);
    setPickerVisible(false)
  }

  const onEnterPress = async (event) =>{
    if(event.key === "Enter"){
      if(message || !message.lenght){
        const reqData = [
          {
            email:selectedChat.email,
            name:selectedChat.name,
            profilePic:selectedChat.profilePic,
          },
          {
            email:"",
            name:"",
            profilePic:""
          },
        ];
        await createChannel(reqData);
      }
      const msg = [...message];
      msg.push({
          id: 0,
          messageType: "TEXT",
          text,
          senderID: 0,
          addedOn: "12:00 PM",
        });
        setMessage(msg);
        setText("");
    }
  };

  return (
    <Container>
      <ProfileHeader>
        <ProfileImage src={selectedChat.profilePic}/>
        {selectedChat.name}
      </ProfileHeader>
      <MessageContainer>
        {message.map((messageData) =>(
          <MessageDiv key={messageData.id} isYours={messageData.senderID === 0}>
            <Message isYours={messageData.senderID === 0}>{messageData.text}</Message>
          </MessageDiv>
        ))}
      {pickerVisible && (<EmojiPicker width="30%" margin="auto" height="1000px"  onEmojiClick={onEmojiClick} />)}
      </MessageContainer>
      <ChatBox>
        <SearchContainer>
          <EmojiImage src={"/data.svg"} onClick={()=>setPickerVisible(!pickerVisible)}/>
          <SearchInput placeholder="Type a message" value={text} onKeyDown={onEnterPress} onChange={(e)=>setText(e.target.value)}></SearchInput>
        </SearchContainer>
      </ChatBox>
    </Container>
  )
}
