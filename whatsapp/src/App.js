import { useState } from "react";
import styled from "styled-components"
import { ContactList } from "./components/ContactList";
import { Conversation } from "./components/Conversation";

const Container = styled.div`
  display : flex;
  flex-direction: row;
  height:100vh;
  width:100%;
  background: #f8f9fb;
`;

const Placeholder = styled.div`
  display : flex;
  flex-direction: coloum;
  justify-content: center;
  align-items: center;
  font-size:14px;
  color:rgba(0,0,0,0.45);
`;

const ChatPlaceholder = styled.div`
  width:240px;
  height:240px;
  border-radius:50%;
  object-fit: contain;
`;

function App() {
  const [selectedChat, setSelectedChat] = useState()
  
  return (
    <Container>
      <ContactList />
      {selectedChat ? <Conversation /> : <Placeholder>
          nnn
        </Placeholder>}
    </Container>
  );
}

export default App;
