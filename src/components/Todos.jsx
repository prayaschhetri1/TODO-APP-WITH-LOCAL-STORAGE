import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import Todo from "./Todo";

const lists = JSON.parse(localStorage.getItem("Todos")) || [];

const Todos = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(lists);

  const handleClick = () => {
    const payload = {
      title: task,
      status: false,
      id: Date.now(),
    };

    if (payload.title !== "") {
      setTodos([...todos, payload]);

      setTask("");
    }
  };

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };

  const handleEnter = (e) => {
    if (e.charCode === 13) {
      handleClick();
    }
  };

  // EDIT FUNCTIONALITY

  const handleEdit = (todo) => {
    setTask(todo.title);
    handleDelete(todo.id);
  };

  //   STATUS CHANGING FUNCTIONALITY

  const handleStatus = (id) => {
    let newArr = todos.filter((item) => {
      if (item.id === id) {
        return (item.status = !item.status);
      } else {
        return;
      }
    });

    setTodos(newArr);
  };

  return (
    <Box
      //   border={"1px solid black"}
      py={"5px"}
      px={"10px"}
      textAlign={"center"}
      width={{
        base: "70%",
        md: "50%",
        lg: "30%",
      }}
      m={"auto"}
      marginTop={"40px"}
    >
      <Heading>TODO APP</Heading>
      <Flex>
        <Input
          value={task}
          placeholder="Add something..."
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={(e) => {
            handleEnter(e);
          }}
        />
        <Button
          _hover={{
            bg: "#474444",
            color: "#fff",
          }}
          background={"black"}
          color={"#fff"}
          onClick={handleClick}
        >
          ADD
        </Button>
      </Flex>

      {todos.length === 0 && (
        <Box color={"#069efc"}>
          <br />
          <Heading fontSize={"25px"}>NO TASK IS LEFT</Heading>
          <Heading>Please Add Something...</Heading>
        </Box>
      )}

      <Box>
        {todos.map((todo) => {
          return (
            <Todo
              handleStatus={handleStatus}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              todo={todo}
              key={todo.id}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Todos;
