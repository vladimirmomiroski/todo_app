import React from 'react'
import classes from './TodoMainContainer.module.css'
import TodoHeader from '../TodoHeader/TodoHeader'
import TodoBody from '../TodoBody/TodoBody';

export default function TodoMainContainer() {
    const {title} = classes;
  return (
    <>
      <h1 className={title}>Todo App</h1>
      <TodoHeader/>
      <TodoBody/>
    </>
  )
}
