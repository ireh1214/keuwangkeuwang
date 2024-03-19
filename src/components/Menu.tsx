import Link from "next/Link";

export default function Menu() {
  return (
    <nav className="user_nav">
      <ul>
        <li>
          <Link href="/">내 글</Link>
        </li>
        <li>
          <Link href="/">내 정보</Link>
        </li>
        <li>
          <Link href="/">환경설정</Link>
        </li>
        <li>
          <Link href="/login">로그인창</Link>
        </li>
      </ul>
    </nav>
  );
}
