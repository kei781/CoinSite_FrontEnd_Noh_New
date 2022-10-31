import React from "react";
import style from "./style/Contents.module.css";

const Contents = ({ children }) => {
  return (
    <div className={style.Contents}>
      <div className={style.InnerContents}>{children}</div>
    </div>
  );
};

export default Contents;
