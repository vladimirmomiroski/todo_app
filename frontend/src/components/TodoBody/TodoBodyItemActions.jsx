import React from 'react'
import classes from './TodoBodyItemActions.module.css'

export default function TodoBodyItemActions() {
    const {deleteBtn} = classes
  return (
    <div>
      <button className={deleteBtn}>Delete</button>
    </div>
  )
}
