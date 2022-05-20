import React, { useEffect, useState } from "react";
import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Box,
} from "@chakra-ui/react";
import CardItem from "./CardItem";

const CardList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers()
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  }, [data.length]);

  const getUsers = () => {
    return fetch(import.meta.env.VITE_API_URL, {
      mode: "cors",
      method: "GET",
    });
  };

  // If you add data to array dependency in useEffect, it'll return a infinite loop

  return (
    <TableContainer mt={"8"}>
      <Table variant={"striped"}>
        <Thead>
          <Tr>
            <Th scope="col">Name</Th>
            <Th scope="col">Email</Th>
            <Th scope="col">Address</Th>
            <Th scope="col">Age</Th>
            <Th scope="col">
              <Box>Edit</Box>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item) => (
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

export default CardList;
