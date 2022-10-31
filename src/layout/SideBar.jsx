import React from "react";
import style from "./style/SideBar.module.css";

const SideBar = ({ setBoardName }) => {
  //   const onClick = (e) => {
  //     setBoardName(e);
  //   };
  return (
    <div className={style.SideBar}>
      <div className={style.InnerSideBar}>
        <a className={style.Logo} href="/"></a>

        <div className={style.menuWrap}>
          <ul className={style.menu}>
            <li className={style.menuSubject}>주식</li>
            <li className={style.menuContents}>
              <a className={style.ContentsText} href="/Board/0">
                <img className={style.ContentsImg} src="" alt="" />
                국내 주식 정보
              </a>
            </li>
            <li className={style.menuContents}>
              <a className={style.ContentsText} href="/Board/1">
                <img className={style.ContentsImg} src="" alt="" />
                해외 주식 정보
              </a>
            </li>
            <li className={style.menuContents}>
              <a className={style.ContentsText} href="/Board/2">
                <img className={style.ContentsImg} src="" alt="" />
                게시판
              </a>
            </li>
          </ul>

          <ul className={style.menu}>
            <li className={style.menuSubject}>코인</li>
            <li className={style.menuContents}>
              <a className={style.ContentsText} href="/Board/3">
                <img className={style.ContentsImg} src="" alt="" />
                코인 정보
              </a>
            </li>
            <li className={style.menuContents}>
              <a className={style.ContentsText} href="/Board/4">
                <img className={style.ContentsImg} src="" alt="" />
                게시판
              </a>
            </li>
          </ul>

          <ul className={style.menu}>
            <li className={style.menuSubject}>선물/마진</li>
            <li className={style.menuContents}>
              <a className={style.ContentsText} href="/Board/5">
                <img className={style.ContentsImg} src="" alt="" />
                선물/마진 정보
              </a>
            </li>
            <li className={style.menuContents}>
              <a className={style.ContentsText} href="/Board/6">
                <img className={style.ContentsImg} src="" alt="" />
                게시판
              </a>
            </li>
          </ul>

          <ul className={style.menu}>
            <li className={style.menuSubject}>커뮤니티</li>
            <li className={style.menuContents}>
              <a className={style.ContentsText} href="/Board/7">
                <img className={style.ContentsImg} src="" alt="" />
                자유 게시판
              </a>
            </li>
            <li className={style.menuContents}>
              <a className={style.ContentsText} href="/Board/8">
                <img className={style.ContentsImg} src="" alt="" />
                손익인증
              </a>
            </li>
          </ul>

          <ul className={style.menu}>
            <li className={style.menuSubject}>사이트</li>
            <li className={style.menuContents}>
              <a className={style.ContentsText} href="https://www.naver.com">
                <img className={style.ContentsImg} src="" alt="" />
                증권 사이트
              </a>
            </li>
            <li className={style.menuContents}>
              <a className={style.ContentsText} href="https://www.naver.com">
                <img className={style.ContentsImg} src="" alt="" />
                코인 거래소 국내
              </a>
            </li>
            <li className={style.menuContents}>
              <a className={style.ContentsText} href="https://www.naver.com">
                <img className={style.ContentsImg} src="" alt="" />
                코인 거래소 해외
              </a>
            </li>
          </ul>

          <ul className={style.menu}>
            <li className={style.menuSubject}>공지</li>
            <li className={style.menuContents}>
              <a className={style.ContentsText} href="/Board/9">
                <img className={style.ContentsImg} src="" alt="" />
                공지사항
              </a>
            </li>
            <li className={style.menuContents}>
              <a className={style.ContentsText} href="/Board/10">
                <img className={style.ContentsImg} src="" alt="" />
                이벤트
              </a>
            </li>
            <li className={style.menuContents}>
              <a className={style.ContentsText} href="/Board/11">
                <img className={style.ContentsImg} src="" alt="" />
                문의
              </a>
            </li>
          </ul>
          <ul className={style.menu}>
            <li className={style.menuSubject}>설정</li>
            <li className={style.menuContents}>
              <a className={style.ContentsText} href="/Board/12">
                <img className={style.ContentsImg} src="" alt="" />
                개인정보
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
