import React, {createContext, useState, useEffect} from 'react'
import {TodoArr} from '../InitialTodos'
export const Context = createContext();

export const Provider = ({children}) => {

    const [todoData, setTodoData] = useState([])

    useEffect(() => {
        setTodoData(TodoArr)
    }, [])

    const addTodo = () => {

    }

    const deleteTodo = () => {

    }

    const contextObj = {
      todoData,
    }


return <Context.Provider value={contextObj}>{children}</Context.Provider>
}