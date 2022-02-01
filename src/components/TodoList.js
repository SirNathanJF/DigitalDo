import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Todo } from "./Todo";

const TodoList = () => {
  const { todos } = useSelector((state) => state);
  return (
    <Box>
      {todos.length ? todos.map(todo => (
        <Todo key={`todo.id`} todo={todo}/>
      )):<Box textAlign="center" my="4">
          No tasks found, great job!
        </Box>}

    </Box>
  );
};

export default TodoList;
