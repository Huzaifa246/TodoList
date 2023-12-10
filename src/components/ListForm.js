import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const TodoButton = styled.button`
  padding: 16px;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  outline: none;
  background: linear-gradient(
    90deg,
    rgba(93, 12, 255, 1) 0%,
    rgba(155, 0, 250, 1) 100%
  );
  color: #fff;
  text-transform: capitalize;
`;
const TodoButtonEdit = styled.button`
  background: linear-gradient(
    90deg,
    rgba(20, 159, 255, 1) 0%,
    rgba(17, 122, 255, 1) 100%
  );
  padding: 16px 22px;
`;
function ListForm(props) {
  // for separate update form in list
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const inputRef = useRef(null);

  // used for focusing in text selection
  useEffect(() => {
    inputRef.current.focus();
  });
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // for random id generation
    props.onSubmit({
      id: Math.floor(Math.random() * 100000),
      text: input,
    });
    setInput("");
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="todo-form">
        {props.edit ? (
          <>
            <input
              placeholder="Update your item"
              value={input}
              onChange={handleChange}
              name="text"
              ref={inputRef}
              className="todo-input edit"
            />
            <TodoButtonEdit onClick={handleSubmit}>Update</TodoButtonEdit>
          </>
        ) : (
          <>
            <input
              placeholder="Add a todo list"
              value={input}
              onChange={handleChange}
              name="text"
              ref={inputRef}
              className="todo-input"
            />
            <TodoButton onClick={handleSubmit}>Add to List</TodoButton>
          </>
        )}
      </form>
    </>
  );
}

export default ListForm;
