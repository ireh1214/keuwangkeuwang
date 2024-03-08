import React from "react"
import Link from "next/link"

export default function page() {
  return (
    <div className="login_wrap">
      <section className="login_container">
        <div className="login_img"></div>
        <div className="inputBox">
          <input type="email" placeholder="아이디 입력창" />
          <input type="password" placeholder="패스워드 입력창" />
          <button>로그인</button>
        </div>
        <hr />
        <div className="sns_login">
          <button className="twitter">트위터 로그인</button>
          <button className="google">구글 로그인</button>
        </div>
        <ul className="other">
          <li>
            <Link href="/">회원가입</Link>
          </li>
          <li>
            <Link href="/">아이디 찾기</Link>
          </li>
          <li>
            <Link href="/">비밀번호 찾기</Link>
          </li>
        </ul>
      </section>
    </div>
  )
}
