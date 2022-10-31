import React from "react";
import style from "./style/Main.module.css";

const Main = () => {
  return (
    <div className={style.WrapMain}>
      <div className={style.Banner}>Banner입니다.</div>
      <div className={style.Chart}>CharBoard1입니다.</div>
      <div className={style.Chart}>CharBoard2입니다.</div>
      <div className={style.ChartGraph}>ChartGraph입니다.</div>
      <div className={style.ImgBoard}>ImgBoard입니다.</div>
      <div className={style.SubBoards}>
        <div className={style.SubBoard}>SubBoard입니다.</div>
        <div className={style.SubBoard}>SubBoard입니다.</div>
      </div>
    </div>
  );
};

export default Main;
