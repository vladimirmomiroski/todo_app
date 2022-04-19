import React, { createContext, useState, useEffect } from "react";
import { TodoArr } from "../../InitialTodos";
export const Context = createContext();

export const Provider = ({ children }) => {

  const [todoData, setTodoData] = useState(TodoArr);

  useEffect(() => {
         fetch("http://localhost:5000/todos")
         .then(res => res.json())
         .then(data => {
           console.log(data)
         }) 
         .catch(error => {
           console.log(error)
         })
  }, [])

  const addTodo = (item) => {
    setTodoData([...todoData, item]);
  };

  const deleteTodo = (id) => {
    let confirming = window.confirm(
      "Are you sure you want to delete this todo?"
    );
    if (confirming) {
      const filteredArr = todoData.filter((el) => el.id !== id);
      setTodoData(filteredArr);
    }
  };

  const checkTodoAsCompleted = (id) => {
    const checkTodo = todoData.map((el) => {
      if (el.id === id) {
        el.isCompleted = !el.isCompleted;
        return el;
      }
      return el;
    });
    setTodoData(checkTodo);
  };

  const contextObj = {
    todoData,
    addTodo,
    deleteTodo,
    checkTodoAsCompleted,
  };

  return <Context.Provider value={contextObj}>{children}</Context.Provider>;
};
