import { Box, Button, Checkbox, Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";

const Todo = ({ todo, handleDelete, handleStatus, handleEdit }) => {
  return (
    <Flex
      align={"center"}
      width={"95%"}
      justify={"space-between"}
      m={"auto"}
      mt={"20px"}
    >
      <Flex gap={"20px"} align={"center"}>
        <Checkbox onChange={() => handleStatus(todo.id)}></Checkbox>
        <Text
          textDecoration={todo.status ? "line-through" : "none"}
          fontSize={"20px"}
          fontWeight={"500"}
        >
          {todo.title}
        </Text>
      </Flex>

      <Flex gap={"10px"}>
        <Button
          _hover={{
            bg: "#4a0f8e",
            color: "#fff",
          }}
          background={"#6921bc"}
          color={"#fff"}
          onClick={() => handleEdit(todo)}
        >
       
        </Button>

        <Button
          _hover={{
            bg: "#474444",
            color: "#fff",
          }}
          background={"black"}
          color={"#fff"}
          onClick={() => handleDelete(todo.id)}
        >
          DELETE
        </Button>
      </Flex>
    </Flex>
  );
};

export default Todo;
