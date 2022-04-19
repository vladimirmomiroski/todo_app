import React, { useContext } from "react";
import classes from "./TodoBody.module.css";
import { Context } from "../../context/Context";
import TodoBodyItem from "./TodoBodyItem";

export default function TodoBody() {
  const { container, ul } = classes;

  const { todoData } = useContext(Context);

  return (
    <div className={container}>
      <ul className={ul}>
        {todoData.map((item) => (
          <TodoBodyItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
