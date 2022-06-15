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
  useToast,
  Box,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from "../redux/contacts";

const CardItem = ({
  _id,
  firstName,
  lastName,
  email,
  address,
  age,
  contactIndex,
}) => {
  const [deleteContact, { isSuccess }] = useDeleteContactMutation();
  const { refetch } = useGetContactsQuery();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

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
        <Button onClick={onOpen} colorScheme={"red"}>
          Delete
        </Button>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Customer
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  colorScheme="red"
                  onClick={() => {
                    deleteContact(_id);
                    isSuccess && onClose() && refetch();
                  }}
                  ml={3}
                >
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </Td>
    </Tr>
  );
};

export default CardItem;
