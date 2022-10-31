import React from "react";
import { useParams } from "react-router-dom";
import style from "./style/BoardList.module.css";

const BoardList = ({ i, state, setId }) => {
  const { BoardId } = useParams();
  return (
    <table className={style.Board}>
      <thead className={style.head}>
        <th className={style.Index}>No</th>
        <th className={style.Subject}>제목</th>
        <th className={style.Auther}>글쓴이</th>
        <th className={style.Date}>날짜</th>
        <th className={style.Views}>조회수</th>
      </thead>
      {state.list.map((list) => (
        <tbody className={style.head}>
          <th className={style.Index}>{list.no}</th>
          <th className={style.Subject}>
            <a
              href={"/Board/" + BoardId.toString() + "/detail"}
              onClick={() => {
                i = list.no;
              }}
            >
              {list.subject}
            </a>
          </th>
          <th className={style.Auther}>{list.auther}</th>
          <th className={style.Date}>{list.date}</th>
          <th className={style.Views}>{list.views}</th>
        </tbody>
      ))}
    </table>
  );
};

export default BoardList;
