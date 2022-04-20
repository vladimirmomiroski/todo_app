import React, { createContext, useState, useEffect } from "react";
export const Context = createContext();

export const Provider = ({ children }) => {

  const [todoData, setTodoData] = useState([]);
  
  const fetchTodos = "http://localhost:5000/todos"

  useEffect(() => {
    fetch(fetchTodos)
      .then((res) => res.json())
      .then((data) => {
        setTodoData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addTodo = (item) => {
    setTodoData([...todoData, item]);
    postTodoToServer(item)
  };

  const postTodoToServer = (item) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
   } 

    fetch(fetchTodos, options)
    .then(res => {
      if(res.status === 200) {
        window.alert("Todo Succesfully added!")
      }
    })
  }

  const deleteTodoFromServer = (id) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
   } 

    fetch(`${fetchTodos}/${id}`, options)
   
  }

 
  const deleteTodo = (id) => {
    let confirming = window.confirm(
      "Are you sure you want to delete this todo?"
    );
    if (confirming) {
      const filteredArr = todoData.filter((el) => el.id !== id);
      setTodoData(filteredArr);
      deleteTodoFromServer(id)
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
