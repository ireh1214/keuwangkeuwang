import React, { useState } from "react";
import Link from "next/link";
import CommonInput from "./CommonInput";
import Menu from "./Menu";

export default function Header() {
  // Menu 컴포넌트의 표시 상태를 관리
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const MenuOpen = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header>
      <h1>
        <a href="#">LOGO</a>
      </h1>

      <CommonInput />

      <ul>
        {/*  <li>
          <Link href="#">회원가입</Link>
        </li>
       <li>
          <Link href="#">로그인</Link>
        </li>*/}
        <li className="profile" onClick={MenuOpen}>
          <img src="/img/main/sample4.png" alt="" />
        </li>
        <li className="stand_state">{isMenuVisible && <Menu />}</li>
      </ul>
    </header>
  );
}
