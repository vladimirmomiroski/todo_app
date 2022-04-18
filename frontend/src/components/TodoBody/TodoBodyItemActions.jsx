import React, {useContext} from 'react'
import classes from './TodoBodyItemActions.module.css'
import { Context } from '../../context/Context'

export default function TodoBodyItemActions({id}) {
    const {deleteBtn} = classes

    const {deleteTodo} = useContext(Context)
  return (
    <div>
      <button onClick={() => deleteTodo(id)} className={deleteBtn}>Delete</button>
    </div>
  )
}
