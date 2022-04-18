import React from 'react'
import classes from './TodoMain.module.css'
import TodoMainContainer from './TodoMainContainer/TodoMainContainer'

export default function TodoMain() {

    const {container} = classes
  return (
    <div className={container}>
        <TodoMainContainer/>
    </div>
  )
}
