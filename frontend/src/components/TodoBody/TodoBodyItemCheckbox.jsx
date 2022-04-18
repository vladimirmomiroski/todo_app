import React, {useContext} from 'react'
import classes from './TodoBodyItemCheckbox.module.css'
import {Context} from '../../context/Context'

export default function TodoBodyItemCheckbox({item}) {

  const {container, nameText, checkmark, checked} = classes
  const {id, name, isCompleted} = item

  const {checkTodoAsCompleted} = useContext(Context)

  const checkCompleted = isCompleted ? checked : ""

  return (
    <div className={container}>
    <input onChange={() => checkTodoAsCompleted(id)} className={checkmark} type="checkbox" />
       <p className={`${nameText} ${checkCompleted}`}>{name}</p>
       </div>
  )
}
