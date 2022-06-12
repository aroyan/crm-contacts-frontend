import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Stack,
  Button,
  Heading,
  Text,
  Toast,
  useColorModeValue,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { AddIcon } from "@chakra-ui/icons";
import React, { useState, useEffect } from "react";
import { useAddContactMutation, useGetContactsQuery } from "./redux/contacts";

export const AddItem = () => {
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newAge, setNewAge] = useState("");

  const [addContact, { isLoading }] = useAddContactMutation();
  const { refetch } = useGetContactsQuery();

  const sentPayload = {
    firstName: newFirstName,
    lastName: newLastName,
    email: newEmail,
    address: newAddress,
    age: newAge,
  };

  const addHandler = async (e) => {
    e.preventDefault();
    await addContact(sentPayload);
    refetch();
    setNewFirstName("");
    setNewLastName("");
    setNewEmail("");
    setNewAddress("");
    setNewAge("");
  };

  return (
    <>
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Add Contact
            </Heading>
          </Stack>
          <FormControl
            as="form"
            onSubmit={addHandler}
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <Flex gap="4" flexWrap={{ base: "wrap", md: "unset" }}>
                <FormControl id="firstName" isRequired>
                  <FormLabel htmlFor="newFirstName">First Name</FormLabel>
                  <Input
                    id="newFirstName"
                    name="newFirstName"
                    type="text"
                    value={newFirstName}
                    onChange={(e) => setNewFirstName(e.target.value)}
                  />
                </FormControl>
                <FormControl id="lastName" isRequired>
                  <FormLabel htmlFor="newLastName">Last Name</FormLabel>
                  <Input
                    id="newLastName"
                    type="text"
                    name="newLastName"
                    value={newLastName}
                    onChange={(e) => setNewLastName(e.target.value)}
                  />
                </FormControl>
              </Flex>
              <FormControl>
                <FormLabel htmlFor="newEmail">Email address</FormLabel>
                <Input
                  id="newEmail"
                  name="newEmail"
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="newAddress">Address</FormLabel>
                <InputGroup>
                  <Input
                    id="newAddress"
                    name="newAddress"
                    type="text"
                    value={newAddress}
                    onChange={(e) => setNewAddress(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="newAge">Age</FormLabel>
                <InputGroup>
                  <Input
                    id="newAge"
                    name="newAge"
                    type="number"
                    value={newAge}
                    onChange={(e) => setNewAge(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                  disabled={
                    (newFirstName,
                    newLastName,
                    newEmail,
                    newAge,
                    newAddress === "") || isLoading
                  }
                >
                  {isLoading ? "Submitting" : "Add"}
                </Button>
              </Stack>
            </Stack>
          </FormControl>
        </Stack>
      </Flex>
    </>
  );
};

export default AddItem;
