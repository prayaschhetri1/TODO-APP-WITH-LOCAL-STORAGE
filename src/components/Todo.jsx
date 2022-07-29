import {
  Button,
  Checkbox,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const Todo = ({ todo, handleDelete, handleStatus, handleEdit }) => {
  return (
    <Flex
      align={"center"}
      width={"87%"}
      justify={"space-between"}
      m={"auto"}
      mt={"20px"}
    >
      <Flex gap={"20px"} align={"center"}>
        {/* <Checkbox onChange={() => handleStatus(todo.id)}></Checkbox> */}
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
            bg: "#6218b6",
            color: "#03aaf2",
          }}
          background={"#6921bc"}
          color={"#fff"}
          onClick={() => handleEdit(todo)}
        >
          <FiEdit style={{ fontSize: "20px" }} />
        </Button>

        <Button
          _hover={{
            bg: "#da1d1d",
            color: "#cbc4c4",
          }}
          background={"#ef0a0a"}
          color={"#141212"}
          onClick={() => handleDelete(todo.id)}
        >
          <MdDelete style={{ fontSize: "22px" }}  />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Todo;
