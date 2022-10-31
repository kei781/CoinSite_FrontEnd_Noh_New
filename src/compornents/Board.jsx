import React, { useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import style from "./style/Board.module.css";
import BoardDetail from "./board/BoardDetail";
import BoardList from "./board/BoardList";

const Board = () => {
  const { BoardId } = useParams();
  const { id, setId } = useState(0);
  const i = 0;
  const boardList = {
    0: "국내 주식 정보",
    1: "해외 주식 정보",
    2: "주식 게시판",
    3: "코인 정보 게시판",
    4: "코인 게시판",
    5: "선물/마진 정보 게시판",
    6: "선물/마진 게시판",
    7: "자유 게시판",
    8: "손익인증 게시판",
    9: "공지사항 게시판",
    10: "이벤트 게시판",
    11: "문의 게시판",
    12: "개인정보 게시판",
  };
  const state = {
    list: [
      {
        no: 1,
        subject: "게시글 제목 1",
        auther: "익명의 작성자 1",
        content: "게시글 내용 1",
        date: "20221030",
        views: 1,
      },
      {
        no: 2,
        subject: "게시글 제목 2",
        auther: "익명의 작성자 2",
        content: "게시글 내용 2",
        date: "20221030",
        views: 1,
      },
      {
        no: 3,
        subject: "게시글 제목 3",
        auther: "익명의 작성자 3",
        content: "게시글 내용 3",
        date: "20221030",
        views: 1,
      },
      {
        no: 4,
        subject: "게시글 제목 4",
        auther: "익명의 작성자 4",
        content: "게시글 내용 4",
        date: "20221030",
        views: 1,
      },
      {
        no: 5,
        subject: "게시글 제목 5",
        auther: "익명의 작성자 5",
        content: "게시글 내용 5",
        date: "20221030",
        views: 1,
      },
    ],
  };
  return (
    <div className={style.Wrap}>
      <div className={style.WrapTitle}>{boardList[BoardId]}</div>
      <div className={style.FunctionTap}>
        <div>
          <img src="/" alt="#" />
        </div>
        <a href="/">글쓰기</a>
      </div>
      <Routes>
        <Route
          path="/"
          element={<BoardList i={i} state={state} setId={setId} />}
        ></Route>
        <Route
          path="/Detail"
          element={<BoardDetail i={i} state={state} id={id} />}
        ></Route>
      </Routes>
    </div>
  );
};

export default Board;
