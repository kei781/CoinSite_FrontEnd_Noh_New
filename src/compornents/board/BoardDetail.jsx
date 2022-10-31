import React from "react";
import style from "./style/BoardDetail.module.css";

const BoardDetail = ({ i, state, id }) => {
  return (
    <div className={style.Wrap}>
      <div className={style.SubjectBar}>
        <div className={style.subject}>제목 : {state.list[i].subject}</div>
        <div className={style.auther}>글쓴이 : {state.list[i].auther}</div>
        <div className={style.date}>날짜 : {state.list[i].date}</div>
        <div className={style.views}>조회수 : {state.list[i].views}</div>
      </div>
      <div className={style.Contnets}>내용 : {state.list[i].content}</div>
    </div>
  );
};

export default BoardDetail;
