import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Box,
  Spinner,
  Text,
  Button,
  Center,
} from "@chakra-ui/react";
import { useGetContactsQuery } from "../redux/contacts";
import CardItem from "./CardItem";
import { useEffect, useState } from "react";

const ContactList = () => {
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const { data, error, isLoading, isSuccess, isError, refetch } =
    useGetContactsQuery(page);

  const handlePrevious = () => {
    if (page <= 0) {
      return page;
    } else {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <>
      <TableContainer mt={"8"}>
        {isLoading && <Spinner />}
        {isError && error.message}
        <Table variant={"striped"}>
          <Thead>
            <Tr>
              <Th>No.</Th>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Address</Th>
              <Th>Age</Th>
              <Th>Edit</Th>
            </Tr>
          </Thead>
          <Tbody>
            {isSuccess &&
              data &&
              data.contacts.map((item, i) => (
                <CardItem
                  key={item._id}
                  firstName={item.firstName}
                  lastName={item.lastName}
                  email={item.email}
                  address={item.address}
                  age={item.age}
                  _id={item._id}
                  contactIndex={i + 1}
                />
              ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Center mt="4" gap="4">
        <Button onClick={handlePrevious} disabled={page <= 0}>
          Previous
        </Button>
        <Text>{page + 1}</Text>
        <Button onClick={handleNext} disabled={page >= 5}>
          Next
        </Button>
      </Center>
    </>
  );
};

export default ContactList;
