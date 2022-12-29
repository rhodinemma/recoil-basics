import "./App.css";
import { useRecoilValue } from "recoil";
import CreateTodo from "./components/createTodo";
import ViewTodo from "./components/viewTodo";
import { todoListState } from "./recoil/todoList";

function App() {
  const todoList = useRecoilValue(todoListState);
  console.log(todoList);
  return (
    <>
      <CreateTodo />

      {todoList.map((todoItem) => (
        <ViewTodo key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default App;
