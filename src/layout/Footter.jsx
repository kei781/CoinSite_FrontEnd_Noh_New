import React from "react";
import style from "./style/Footter.module.css";

const Footter = () => {
  return (
    <div className={style.Footter}>
      <div className={style.InnerFootter}>
        <a href="#">회사소개</a>
        <a href="#">인재채용</a>
        <a href="#">이용약관</a>
        <a href="#">개인정보처리방침</a>
        <a href="#">청소년보호정책</a>
        <a href="#">먹튀정책</a>
        <a href="#">고객샌터 1558-1588</a>
      </div>
    </div>
  );
};

export default Footter;
