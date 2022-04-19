import React from 'react'
import classes from './MainContainer.module.css'
import TodoHeader from '../Header/Header'
import TodoBody from '../Body/Body';

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
