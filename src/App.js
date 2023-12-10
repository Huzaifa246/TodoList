import "./App.css";
import List from "./components/List";
import styled from "styled-components";

const TodoApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 520px;
  min-height: 600px;
  background: #161a2b;
  text-align: center;
  margin: 128px auto;
  border-radius: 10px;
  padding-bottom: 32px;
`;
function App() {
  return (
    <TodoApp>
      <List />
    </TodoApp>
  );
}

export default App;
