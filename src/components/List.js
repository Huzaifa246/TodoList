import React, { useState } from "react";
import ListForm from "./ListForm";
import Todo from "./Todo";
import styled from "styled-components";

const H1 = styled.div`
  margin: 32px 0;
  color: #fff;
  font-size: 24px;
`;
function List() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };
  const updateItem = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };
  const removeItem = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };
  const completeTodo = (id) => {
    let updatedItems = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedItems);
  };
  return (
    <>
      <H1>Plan List for Today?</H1>
      <ListForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeItem={removeItem}
        updateItem={updateItem}
      />
    </>
  );
}

export default List;
