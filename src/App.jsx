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

      <div className="container mx-auto">
        <h2 className="text-2xl font-bold py-4 text-center justify-center">
          Available Items
        </h2>
        {todoList.map((todoItem) => (
          <ViewTodo key={todoItem.id} item={todoItem} />
        ))}
      </div>
    </>
  );
}

export default App;
