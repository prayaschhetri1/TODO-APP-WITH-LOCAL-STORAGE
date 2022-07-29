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
      className="main-wrapper"
      height={{
        base:"500px",
        md:"600px"
      }}
      py={"5px"}
      textAlign={"center"}
      width={{
        base: "95%",
        md: "50%",
        lg: "30%",
      }}
      m={"auto"}
      marginTop={"40px"}
    >
      <Heading
        pt={{
          base: "23px",
          md: "26px",
          lg: "35px",
        }}
        className="heading"
        pb={{
          base: "23px",
          md: "26px",
          lg: "35px",
        }}
        bg={"#454141"}
        color={"#fff"}
      >
        TODO APP
      </Heading>
      <Flex mt={"30px"} px={"15px"}>
        <Input
          variant="flushed"
          value={task}
          paddingLeft={"20px"}
          fontSize={"19px"}
          placeholder="Add something here..."
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={(e) => {
            handleEnter(e);
          }}
        />
        {/* <Button
          _hover={{
            bg: "#474444",
            color: "#fff",
          }}
          background={"black"}
          color={"#fff"}
          onClick={handleClick}
        >
          ADD
        </Button> */}
      </Flex>

      {todos.length === 0 && (
        <Box color={"#069efc"}>
          <br />
          <Heading fontSize={{
            base:"20",
            md:"25",
            lg:"28"
          }}>NO TASK IS LEFT</Heading>
          <Heading fontSize={{
            base:"25",
            md:"30",
            lg:"32"
          }}>Please Add Something...</Heading>
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
