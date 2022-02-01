import { Box, Checkbox, Text } from '@chakra-ui/react';
import React from 'react';

export const Todo = ({ todo }) => {
  return (
    <Box>
      <Checkbox>
        <Text>{todo.content}</Text>
      </Checkbox>
    </Box>
  );
};

