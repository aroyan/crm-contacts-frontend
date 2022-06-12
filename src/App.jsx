import { Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AddItem from "./AddItem";
import ContactList from "./ContactList";

function App() {
  return (
    <Container py={"8"} maxWidth={"container.lg"}>
      <AddItem />
      <ContactList />
    </Container>
  );
}

export default App;
