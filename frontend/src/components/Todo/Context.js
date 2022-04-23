import React, { createContext, useState, useEffect } from "react";
import {fetchData, fetchPost, sendMethodToServer} from '../../FetchMethodsHandler/FetchMethodsHandler'
export const Context = createContext();


export const Provider = ({ children }) => {


  const [todoData, setTodoData] = useState([])

  useEffect(() => {
    fetchData(setTodoData);
  }, []);


  const addTodo = (item) => {
    fetchPost(item, setTodoData)
  };

  const deleteTodo = (id) => {
    let confirming = window.confirm(
      "Are you sure you want to delete this todo"
    );
    if (confirming) {
      sendMethodToServer("DELETE", id, setTodoData);
    }
  };

  const checkTodoAsCompleted = (id) => {
    sendMethodToServer("PATCH", id, setTodoData);
  };

  const contextObj = {
    todoData,
    addTodo,
    deleteTodo,
    checkTodoAsCompleted,
  };

  return <Context.Provider value={contextObj}>{children}</Context.Provider>;
};
