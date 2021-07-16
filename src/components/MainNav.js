import React, { useState } from "react";
import { BiSearch, BiBell, BiMenu } from "react-icons/bi";

function MainNav({ setIsOpen }) {
  const initialState = [false, false, false, false, false, false, false];
  const [selected, setSelected] = useState(initialState);

  function handleClick(n) {
    setSelected(initialState);
    let newState = initialState.slice();
    newState[n] = true;
    setSelected(newState);
  }

  return (
    <nav>
      <img src={"./logo.png"} alt="logo" className="logo" />
      <ul className="main">
        <li
          className={selected[0] ? "selected main_item home" : "main_item home"}
          id="0"
          onClick={(e) => {
            handleClick(e.target.id);
          }}
        >
          홈
        </li>
        <li
          className={selected[1] ? "selected main_item " : "main_item"}
          id="1"
          onClick={(e) => {
            handleClick(e.target.id);
          }}
          onMouseOver={() => {
            setIsOpen(true);
          }}
        >
          탐색
        </li>
        <li
          className={selected[2] ? "selected main_item " : "main_item"}
          id="2"
          onClick={(e) => {
            handleClick(e.target.id);
          }}
          onMouseOver={() => {
            setIsOpen(false);
          }}
        >
          커리어 성장
        </li>
        <li
          className={selected[3] ? "selected main_item hide" : "main_item hide"}
          id="3"
          onClick={(e) => {
            handleClick(e.target.id);
          }}
          onMouseOver={() => {
            setIsOpen(false);
          }}
        >
          직군별 연봉
        </li>
        <li
          className={selected[4] ? "selected main_item hide" : "main_item hide"}
          id="4"
          onClick={(e) => {
            handleClick(e.target.id);
          }}
          onMouseOver={() => {
            setIsOpen(false);
          }}
        >
          이력서
        </li>
        <li
          className={selected[5] ? "selected main_item hide" : "main_item hide"}
          id="5"
          onClick={(e) => {
            handleClick(e.target.id);
          }}
          onMouseOver={() => {
            setIsOpen(false);
          }}
        >
          매치업
        </li>
        <li
          className={selected[6] ? "selected main_item hide" : "main_item hide"}
          id="6"
          onClick={(e) => {
            handleClick(e.target.id);
          }}
          onMouseOver={() => {
            setIsOpen(false);
          }}
        >
          프리랜서
        </li>
      </ul>
      <div className="left">
        <div className="user">
          <BiSearch size="22" color="#333" />
          <BiBell size="22" color="#333" />
          <div className="avatar"></div>
        </div>
        <div style={{ margin: "auto 0", background: "#c4c4c4", width: "1px", height: "12px" }} />
        <div className="biz_btn">기업 서비스</div>
      </div>
      <div className="icon-small">
        <BiSearch size="22" color="#333" />
        <BiBell size="22" color="#333" />
        <BiMenu size="22" color="#333" />
      </div>
    </nav>
  );
}

export default MainNav;
