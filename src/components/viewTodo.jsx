import { useRecoilState } from "recoil";
import { todoListState } from "../recoil/todoList";

const ViewTodo = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div className="max-w-[800px] py-10 mx-auto text-center flex flex-row justify-center">
      <input
        type="checkbox"
        className="
        rounded
        mr-5
        border-gray-300
        text-indigo-600
        shadow-sm
        focus:border-indigo-300
        focus:ring
        focus:ring-offset-0
        focus:ring-indigo-200
        focus:ring-opacity-50
      "
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />

      <input
        type="text"
        className="mt-1
                    block
                    w-70
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0"
        value={item.text}
        onChange={editItemText}
      />
      <button
        className="bg-[#3e4178] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white"
        onClick={deleteItem}
      >
        Delete
      </button>
    </div>
  );
};

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export default ViewTodo;
