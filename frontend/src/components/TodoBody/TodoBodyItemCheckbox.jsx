import React from 'react'
import classes from './TodoBodyItemCheckbox.module.css'

export default function TodoBodyItemCheckbox({name, id}) {

  const {container, nameText, checkmark} = classes
  return (
    <div className={container}>
    <input className={checkmark} type="checkbox" />
       <p className={nameText}>{name}</p>
       </div>
  )
}
