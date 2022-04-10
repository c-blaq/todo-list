import "./App.css";
import { useEffect, useState } from "react";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { UpcomingList } from "./components/UpcomingList";
import { FinishedLists } from "./components/FinishedLists";
import { Button } from "./components/Button";
import { AddList } from "./components/AddList";

// getting upcoming items from LS
const getUpcomingItemFromLS = () => {
  let upcomingItems = localStorage.getItem("upcomingLists");
  return upcomingItems ? JSON.parse(upcomingItems) : [];
};

const getFinishedItemFromLS = () => {
  let finishedItems = localStorage.getItem("finishedLists");
  return finishedItems ? JSON.parse(finishedItems) : [];
};

function App() {
  const [todoLists, setTodoLists] = useState(getUpcomingItemFromLS());
  const [finishedTodo, setFinishedTodo] = useState(getFinishedItemFromLS());

  // saving to upcoming to Local Storage LS
  useEffect(() => {
    return localStorage.setItem("upcomingLists", JSON.stringify(todoLists));
  }, [todoLists]);

  // saving to upcoming to Local Storage LS
  useEffect(() => {
    return localStorage.setItem("finishedLists", JSON.stringify(finishedTodo));
  }, [finishedTodo]);

  // Add a new todo
  const addTodo = (todo) => {
    const newTodo = {
      id: Math.floor(Math.random() * 100000) + 1,
      todo,
      counter:
        todoLists.length + finishedTodo.length > 8
          ? todoLists.length + finishedTodo.length + 1
          : `0${todoLists.length + finishedTodo.length + 1}`,
    };
    setTodoLists([...todoLists, newTodo]);
  };

  // A function to filter the todo lists- returns the given id
  const filterTodo = (id) => {
    return todoLists.filter((list) => list.id === id);
  };

  // A function to filter the todo lists- remove the given id
  const filterTodoId = (id) => {
    return todoLists.filter((list) => list.id !== id);
  };

  // Add to finish - move todo to fininished when the check icon is clicked
  const addFinishedTodo = (id) => {
    const fTodo = filterTodo(id);
    const newUpcoming = filterTodoId(id);

    setFinishedTodo([fTodo[0], ...finishedTodo]);
    console.log(fTodo);
    setTodoLists(newUpcoming);
  };

  // Remove todo from finished - return todo back to upcoming when the x icon is clicked
  const removeFinishedTodo = (id) => {
    const uTodo = filterTodo(id);
    const newFinished = filterTodoId(id);
    console.log("uTodo", uTodo);
    console.log("UTODOO", uTodo[0]);
    setTodoLists([uTodo, ...todoLists]);
    setFinishedTodo(newFinished);
  };

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
      {todoLists.length > 0 ? (
        <>
          <UpcomingList
            lists={todoLists}
            text={todoLists.length > 0 ? "" : "No Upcoming Todo"}
            handleFinish={addFinishedTodo}
            onDelete={deleteTodo}
          />
          <FinishedLists
            lists={finishedTodo}
            text={todoLists.length > 0 ? "" : "No Finished Todo"}
            onToggle={toggleShowForm}
            onRemove={removeFinishedTodo}
          />
        </>
      ) : (
        <Home />
      )}
      {showForm && <AddList onAdd={addTodo} />}
      <Button onToggle={toggleShowForm} text={showForm ? "x" : "+"} />
    </div>
  );
}

export default App;
