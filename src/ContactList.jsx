import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Box,
  Spinner,
} from "@chakra-ui/react";
import { useGetContactsQuery } from "./redux/contacts";
import CardItem from "./CardItem";

const ContactList = () => {
  const { data, error, isLoading, isSuccess, isError, refetch } =
    useGetContactsQuery();

  return (
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
            data.map((item, i) => (
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
  );
};

export default ContactList;
