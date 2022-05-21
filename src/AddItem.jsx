import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import React, { useState, useEffect } from "react";
import { AddIcon } from "@chakra-ui/icons";

export const AddItem = () => {
  const [hide, setHide] = useState(false);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newAge, setNewAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: newFirstName,
        lastName: newLastName,
        email: newEmail,
        address: newAddress,
        age: newAge,
      }),
    }).then(() => console.log("contact added"));

    setNewFirstName("");
    setNewLastName("");
    setNewEmail("");
    setNewAddress("");
    setNewAge("");
  };

  return (
    <>
      <Text
        as={"button"}
        colorScheme={"cyan"}
        p={"2"}
        bg={"blue.200"}
        borderRadius="lg"
        onClick={() => setHide(!hide)}
        fontWeight="bold"
        color={"blackAlpha.900"}
      >
        Add Contact <AddIcon />
      </Text>
      {hide && (
        <Flex minH={"100vh"} align={"center"} justify={"center"}>
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"} textAlign={"center"}>
                Add Contact
              </Heading>
            </Stack>
            <Box
              as="form"
              onSubmit={handleSubmit}
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input
                        type="text"
                        value={newFirstName}
                        onChange={(e) => setNewFirstName(e.target.value)}
                      />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName" isRequired>
                      <FormLabel>Last Name</FormLabel>
                      <Input
                        type="text"
                        value={newLastName}
                        onChange={(e) => setNewLastName(e.target.value)}
                      />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <InputGroup>
                    <Input
                      type="text"
                      value={newAddress}
                      onChange={(e) => setNewAddress(e.target.value)}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <FormLabel>Age</FormLabel>
                  <InputGroup>
                    <Input
                      type="number"
                      value={newAge}
                      onChange={(e) => setNewAge(e.target.value)}
                    />
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    type="submit"
                  >
                    Add
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      )}
    </>
  );
};

export default AddItem;
