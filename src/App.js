import { useState, useRef } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([
    {id: 1, name: "Todo1", complited: false},
    {id: 2, name: "Todo2", complited: false},
    {id: 3, name: "Todo3", complited: true}
  ]);

  const todoNmaeRef = useRef();

  const handleAddTodo = () => {
    //タスクを追加する
    const name = todoNmaeRef.current.value;
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), name: name, complited: false}]
    });
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo => todo.id === id))
    todo.complited = !todo.complited;
    setTodos(newTodos);
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input tpe="text" ref={todoNmaeRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク：0</div>
    </>
  );
}

export default App;
