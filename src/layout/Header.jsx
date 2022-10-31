import React from "react";
import style from "./style/Header.module.css";

const Header = ({ children }) => {
  return (
    <div className={style.Header}>
      <div className={style.InnerHeader}>
        <div className={style.WrapMenu}>
          <a className={style.localriseMenu}>
            Korea
            <img className={style.localriseIcon} src="" alt="" />
          </a>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Header;
