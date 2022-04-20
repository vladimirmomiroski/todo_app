import React, { createContext, useState, useEffect } from "react";
export const Context = createContext();

export const Provider = ({ children }) => {

  const [todoData, setTodoData] = useState([]);
  
  const fetchTodos = "http://localhost:5000/todos"


  useEffect(() => {
     fetchData()
  }, []);

  const fetchData = () => {
    fetch(fetchTodos)
    .then((res) => res.json())
    .then((data) => {
      setTodoData(data);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  

  const addTodo = (item) => {
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
       fetchData()
      }
    })
  }

  const deleteTodo = (id) => {
    let confirming = window.confirm("Are you sure you want to delete this todo")
    if(confirming) {
   sendMethodToServer('DELETE', id)
    }
  }

  const sendMethodToServer = (method, id) => {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
   } 

    fetch(`${fetchTodos}/${id}`, options)
    .then(res => {
     if(res.status === 200) {
       fetchData()
     }
    })
  }

  const checkTodoAsCompleted = (id) => {
      sendMethodToServer('PATCH', id)
  };

  const contextObj = {
    todoData,
    addTodo,
    deleteTodo,
    checkTodoAsCompleted,
  };

  return <Context.Provider value={contextObj}>{children}</Context.Provider>;
};
