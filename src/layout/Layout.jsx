import React from "react";
import style from "./style/Layout.module.css";
const LayOut = ({ children }) => {
  return (
    <div className={style.Layout}>
      <div className={style.Flex}>
        <div className={style.InnerGrid}>{children}</div>
      </div>
    </div>
  );
};

export default LayOut;
