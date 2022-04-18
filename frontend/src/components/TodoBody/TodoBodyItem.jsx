import React from 'react'
import classes from './TodoBodyItem.module.css'
import TodoBodyItemCheckbox from './TodoBodyItemCheckbox'
import TodoBodyItemActions from './TodoBodyItemActions'

export default function TodoBodyItem({item}) {

    const {li} = classes

    const {id, name, isEnabled} = item
  return (
      <li className={li}>
        <TodoBodyItemCheckbox name={name} id={id}/>
        <TodoBodyItemActions/>
        </li>
  )
}
