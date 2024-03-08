import React from "react"
import Link from "next/link"
import CommonInput from "./CommonInput"
import Menu from "./Menu"

export default function Header() {
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
        <li className="profile">
          <img src="/img/main/sample4.png" alt="" />
        </li>
      </ul>
    </header>
  )
}
