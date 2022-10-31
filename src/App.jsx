import "./normalize.css";
import { useState } from "react";

import Contents from "./layout/Contents";
import Header from "./layout/Header";
import Layout from "./layout/Layout";
import SideBar from "./layout/SideBar";
import Footter from "./layout/Footter";
import Account from "./compornents/Account";
import Board from "./compornents/Board";
import Main from "./compornents/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [checkLogin, setCheckLogin] = useState(false);
  /* 보드 테스트 데이터*/

  /*.list[BoardId]*/
  return (
    <BrowserRouter>
      <Layout>
        {/* 좌측의 사이드바 레이아웃입니다. */}
        <SideBar />
        {/* 우측 상단의 헤더 레이아웃입니다. */}
        <Header>
          {/* 헤더메뉴 우측의 어카운트 ""컴포넌트""입니다 */}
          <Account checkLogin={checkLogin} setCheckLogin={setCheckLogin} />
        </Header>
        {/* 우측 중단의 컨텐츠 레이아웃입니다. */}
        <Contents>
          {/* 컨텐츠 영역 전체를 차지하는 ""컴포넌트 라우팅""입니다. */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Board/:BoardId/*" element={<Board />} />
            {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가
            없는경우 처리 */}
            <Route path="*" element={<Main />}></Route>
          </Routes>
        </Contents>
      </Layout>
      <Footter></Footter>
    </BrowserRouter>
  );
}

export default App;
