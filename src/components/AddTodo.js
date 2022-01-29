import { Button, Flex, FormControl, Input } from '@chakra-ui/react';
import React from 'react';

export const AddTodo = () => {
  return (
    <form>
      <Flex>
        <FormControl>
          <Input
           type="text"
          />
        </FormControl>
        <Button>Add Todo</Button>
      </Flex>
    </form>
  );
};

export default AddTodo;