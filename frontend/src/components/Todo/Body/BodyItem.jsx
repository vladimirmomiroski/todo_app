import React from "react";
import classes from "./BodyItem.module.css";
import BodyItemCheckbox from "./BodyItemCheckbox";
import BodyItemActions from "./BodyItemActions";

export default function TodoBodyItem({ item }) {
  const { li } = classes;

  const { id } = item;
  return (
    <li className={li}>
      <BodyItemCheckbox item={item} />
      <BodyItemActions id={id} />
    </li>
  );
}
