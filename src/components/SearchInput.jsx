import {
  Box,
  Button,
  Flex,
  FormControl,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import CardItem from "./CardItem";
import { useSearchContactQuery } from "../redux/contacts";
import { useDebounce } from "../hooks/useDebounce";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const { data, error, isLoading, isSuccess } = useSearchContactQuery(query);
  return (
    <>
      <FormControl as="form" my="8">
        <HStack>
          <Input
            type="search"
            placeholder="Search..."
            onChange={useDebounce((e) => setQuery(e.target.value), 500)}
          />
          <Button>Search</Button>
        </HStack>
      </FormControl>
      {isSuccess &&
        data &&
        data.contact?.map((item, i) => (
          <Flex
            p="4"
            key={i}
            bg="cyan.800"
            m="2"
            borderRadius="6"
            shadow="md"
            flexDir="column"
          >
            <Box>Name : {`${item.firstName} ${item.lastName}`}</Box>
            <Box>Email : {item.email}</Box>
          </Flex>
        ))}
      {query === ""
        ? null
        : data.error && (
            <Text p="4" m="2" bg="red.400" borderRadius="lg">
              Not found
            </Text>
          )}
    </>
  );
};

export default SearchInput;
