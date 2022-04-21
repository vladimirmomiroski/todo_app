import React, { useContext } from "react";
import classes from "./Body.module.css";
import { Context } from "../Context";
import BodyItem from "./BodyItem";

export default function Body() {
  const { container, ul } = classes;

  const { todoData } = useContext(Context);

  return (
    <div className={container}>
      <ul className={ul}>
        {todoData.map(item => (
          <BodyItem key={item._id} item={item} />
        ))}
      </ul>
    </div>
  );
}
