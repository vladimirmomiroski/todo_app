import React, {useState} from 'react'
import classes from './TodoHeader.module.css'

export default function TodoHeader() {
  const {container, input, btn} = classes

  const [todoName, setTodoName] = useState("")

  const onSubmitHandler = (e) => {
   e.preventDefault()
   console.log(todoName)
  }

  return (
    <form onSubmit={onSubmitHandler} className={container}>
     <input onChange={(e) => setTodoName(e.target.value)} className={input} type="text" placeholder='New Todo'/>
     <button className={btn}>Add ToDo</button>
    </form>
  )
}
