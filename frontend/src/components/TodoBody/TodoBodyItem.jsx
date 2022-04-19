import React from "react";
import classes from "./TodoBodyItem.module.css";
import TodoBodyItemCheckbox from "./TodoBodyItemCheckbox";
import TodoBodyItemActions from "./TodoBodyItemActions";

export default function TodoBodyItem({ item }) {
  const { li } = classes;

  const { id } = item;
  return (
    <li className={li}>
      <TodoBodyItemCheckbox item={item} />
      <TodoBodyItemActions id={id} />
    </li>
  );
}
