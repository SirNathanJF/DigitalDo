import { Button, Flex, FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";
import React from "react";

export const AddTodo = () => {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <form>
      <Flex>
        <FormControl>
          <Input
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
