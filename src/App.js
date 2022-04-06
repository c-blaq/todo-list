import "./App.css";
import { useState } from "react";
import { Header } from "./components/Header";
import { UpcomingList } from "./components/UpcomingList";
import { FinishedLists } from "./components/FinishedLists";
import { Button } from "./components/Button";
import { AddList } from "./components/AddList";

function App() {
  const [todoLists, setTodoLists] = useState([
    {
      id: 1,
      todo: "Read a book",
    },
    {
      id: 2,
      todo: "Read a book",
    },
    {
      id: 3,
      todo: "Read a book",
    },
    {
      id: 4,
      todo: "Read book",
    },
  ]);
  const [finishedTodo, setFinishedTodo] = useState([]);

  // Add to finish
  const addFinishedTodo = (id) => {
    const fTodo = todoLists.filter((list) => list.id === id);
    setFinishedTodo([fTodo, ...finishedTodo]);
  };

  // Add a new todo
  const addTodo = (todo) => {
    const newTodo = { id: Math.floor(Math.random() * 100000) + 1, todo };
    setTodoLists([newTodo, ...todoLists]);
  };

  // toggle todo add input
  const [showForm, setShowForm] = useState(false);
  const toggleShowForm = () => setShowForm(!showForm);

  return (
    <div className="container">
      <Header />
      <UpcomingList lists={todoLists} handleFinish={addFinishedTodo} />
      <FinishedLists lists={finishedTodo} onToggle={toggleShowForm} />
      {showForm && <AddList onAdd={addTodo} />}
      <Button onToggle={toggleShowForm} text={showForm ? "x" : "+"} />
    </div>
  );
}

export default App;
