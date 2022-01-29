import React from 'react';
import { Container, Heading } from '@chakra-ui/react';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <Container className="App" maxW="container.sm">
      <Heading my="4">Todo List</Heading>
      <AddTodo />
    </Container>
  );
}

export default App;
