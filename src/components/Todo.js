import { Box, Checkbox, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from '../redux/actions';


export const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [checked, isChecked] = useState(false);

  const handleCheck = () => dispatch(toggleTodo(todo.id))

  return (
    <Box mb={1} bgColor={!todo.completed ? 'lightcoral' : "lightgreen"} p={2}>
      <Checkbox onChange={handleCheck} colorScheme="teal" isChecked={checked}>
        <Text as={todo.completed && "del"}>{todo.content}</Text>
      </Checkbox>
    </Box>
  );
};

