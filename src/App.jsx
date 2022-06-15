import { Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AddItem from "./components/AddItem";
import ContactList from "./components/ContactList";
import SearchInput from "./components/SearchInput";

function App() {
  return (
    <Container py={"8"} maxWidth={"container.lg"}>
      <AddItem />
      <ContactList />
      <SearchInput />
    </Container>
  );
}

export default App;
