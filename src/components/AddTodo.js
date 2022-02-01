import { Button, Flex, FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleInput = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex>
        <FormControl>
          <Input
            value={value}
            type="text"
            onChange={handleInput}
            borderTopRightRadius={0}
            borderBottomRightRadius={0}
          />
        </FormControl>
        <Button colorScheme="teal" type="submit" disabled={!value} borderTopLeftRadius={0} borderBottomLeftRadius={0}>
          Add Todo
        </Button>
      </Flex>
    </form>
  );
};

export default AddTodo;
