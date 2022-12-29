import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../recoil/todoList";

const CreateTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div className="container mx-auto">
      <div className="max-w-[800px] w-full py-8 mx-auto text-center flex flex-col justify-center">
        <h2 className="text-2xl font-bold py-10">Your Todo List 2023</h2>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Recoil is an experimental state management library for React apps.
        </p>
        <input
          className="mt-1
                    block
                    w-50
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0"
          type="text"
          value={inputValue}
          onChange={onChange}
        />
        <button
          className="bg-[#3e4178] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white"
          onClick={addItem}
        >
          Add
        </button>
      </div>
    </div>
  );
};

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}

export default CreateTodo;
