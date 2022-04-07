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

  // Add a new todo
  const addTodo = (todo) => {
    const newTodo = { id: Math.floor(Math.random() * 100000) + 1, todo };
    setTodoLists([newTodo, ...todoLists]);
  };

  // Add to finish - move todo to fininished when the check icon is clicked
  const addFinishedTodo = (id) => {
    const fTodo = todoLists.filter((list) => list.id === id);
    const newUpcoming = todoLists.filter((list) => list.id !== id);
    setFinishedTodo([fTodo[0], ...finishedTodo]);
    setTodoLists(newUpcoming);
  };

  // Remove todo from finished - return todo back to upcoming when the x icon is clicked

  // Delete a todo - delete a todo from upcoming when the x icon is clicked
  const deleteTodo = (id) => {
    const updatedLists = todoLists.filter((list) => list.id !== id);
    setTodoLists(updatedLists);
  };

  // toggle todo add input
  const [showForm, setShowForm] = useState(false);
  const toggleShowForm = () => setShowForm(!showForm);

  return (
    <div className="container">
      <Header />
      <UpcomingList
        lists={todoLists}
        handleFinish={addFinishedTodo}
        onDelete={deleteTodo}
      />
      <FinishedLists lists={finishedTodo} onToggle={toggleShowForm} />
      {showForm && <AddList onAdd={addTodo} />}
      <Button onToggle={toggleShowForm} text={showForm ? "x" : "+"} />
    </div>
  );
}

export default App;
