import Link from "next/link"
import React, { useState } from "react"

export default function Menu() {
  const [isMenuOn, setMenuOn] = useState(false)

  const handleClick = () => {
    setMenuOn(prevState => !prevState)
  }

  return (
    <nav className={isMenuOn ? "on" : ""} onClick={handleClick}>
      <ul>
        <li>
          <Link href="/">Main</Link>
        </li>
        <li>
          <Link href="/document">공지사항</Link>
        </li>
        <li>
          <Link href="/guide">자료실</Link>
        </li>
        <li>
          <Link href="/">멤버란</Link>
        </li>
      </ul>
    </nav>
  )
}
