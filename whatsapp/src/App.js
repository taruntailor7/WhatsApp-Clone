import styled from "styled-components"
import { ContactList } from "./components/ContactList";
import { Conversion } from "./components/Conversion";

const Container = styled.div`
  display : flex;
  flex-direction: row;
  height:100vh;
  width:100%;
  background: #f8f9fb;
`;

function App() {
  return (
    <Container>
      <ContactList />
      <Conversion />
    </Container>
  );
}

export default App;
