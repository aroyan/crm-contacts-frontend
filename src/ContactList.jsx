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
  const { data, error, isLoading, isSuccess, isError } = useGetContactsQuery();

  return (
    <TableContainer mt={"8"}>
      {isLoading && <Spinner />}
      {isError && error.message}
      <Table variant={"striped"}>
        <Thead>
          <Tr>
            <Th scope="col">Name</Th>
            <Th scope="col">Email</Th>
            <Th scope="col">Address</Th>
            <Th scope="col">Age</Th>
            <Th scope="col">Edit</Th>
          </Tr>
        </Thead>
        <Tbody>
          {isSuccess &&
            data &&
            data.map((item) => (
              <CardItem
                key={item._id}
                firstName={item.firstName}
                lastName={item.lastName}
                email={item.email}
                address={item.address}
                age={item.age}
                _id={item._id}
              />
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ContactList;
