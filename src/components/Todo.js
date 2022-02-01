import { Box, Checkbox, Text } from '@chakra-ui/react';
import React, { useState } from 'react';


export const Todo = ({ todo }) => {
  const [checked, isChecked] = useState(false);

  return (
    <Box mb={1} bgColor={!todo.completed ? 'lightcoral' : "lightgreen"} p={2}>
      <Checkbox colorScheme="teal" isChecked={checked}>
        <Text as={todo.completed && "del"}>{todo.content}</Text>
      </Checkbox>
    </Box>
  );
};

