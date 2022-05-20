import { Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AddItem from "./AddItem";
import CardList from "./CardList";

function App() {
  return (
    <Container py={"8"} maxWidth={"container.md"}>
      <AddItem />
      <CardList />
    </Container>
  );
}

export default App;
