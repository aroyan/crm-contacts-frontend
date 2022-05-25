import React, { useState } from "react";
import {
  Tr,
  Td,
  Th,
  Text,
  Button,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useDeleteContactMutation } from "./redux/contacts";

const CardItem = ({
  _id,
  firstName,
  lastName,
  email,
  address,
  age,
  contactIndex,
}) => {
  const [deleteContact, deleteContactResult] = useDeleteContactMutation();

  const handleDelete = () => {
    fetch(`${import.meta.env.VITE_API_URL}/${_id}`, {
      method: "DELETE",
      mode: "cors",
    }).then((res) => {
      res.json().then((res) => console.log(res));
    });
  };

  return (
    <Tr key={_id}>
      <Td>{contactIndex}</Td>
      <Td>
        {firstName} {lastName}
      </Td>
      <Td>{email}</Td>
      <Td>{address}</Td>
      <Td>{age}</Td>
      <Td>
        <Popover>
          <PopoverTrigger>
            <Button colorScheme={"red"}>
              <DeleteIcon />
            </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader>
                Are you sure to delete this contact?
              </PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody textAlign={"end"}>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    deleteContact(_id);
                    console.log("Deleted");
                  }}
                  colorScheme={"red"}
                >
                  Yes
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
      </Td>
    </Tr>
  );
};

export default CardItem;
