import React, {createContext, useState, useEffect} from 'react'
import {TodoArr} from '../InitialTodos'
export const Context = createContext();

export const Provider = ({children}) => {

    const [todoData, setTodoData] = useState([])

    useEffect(() => {
        setTodoData(TodoArr)
    }, [])

    const addTodo = (item) => {
      setTodoData([...todoData, item])
    }

    const deleteTodo = (id) => {
       let confirming = window.confirm("Are you sure you want to delete this todo?")
       if(confirming) {
         const filteredArr = todoData.filter(el => el.id !== id)
         setTodoData(filteredArr)
       }
    }

    const contextObj = {
      todoData,
      addTodo,
      deleteTodo
    }


return <Context.Provider value={contextObj}>{children}</Context.Provider>
}