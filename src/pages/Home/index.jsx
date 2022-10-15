import { Container } from "@chakra-ui/react";
import AddItem from "../../components/AddItem";
import ContactList from "../../components/ContactList";
import SearchInput from "../../components/SearchInput";

function Home() {
  return (
    <Container py={"8"} maxWidth={"container.lg"}>
      <AddItem />
      <ContactList />
      <SearchInput />
    </Container>
  );
}

export default Home;
