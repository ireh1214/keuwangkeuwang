/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useState } from "react"
import HomeLayout from "@/components/Layout/HomeLayout"
import Link from "next/link"

export default function Home(props) {
  const [activeTab, setActiveTab] = useState("all")

  const handleTabClick = tab => {
    setActiveTab(tab)
  }

  return (
    <div className="home_wrap">
      <HomeLayout>
        <div className="tabMenu">
          <div className="menuBox">
            <button
              onClick={() => handleTabClick("all")}
              className={`{activeTab === "all" ? "active on" : ""}`}
            >
              전체
            </button>
            <button
              onClick={() => handleTabClick("myPosts")}
              className={`{activeTab === "myPosts" ? "active on" : ""}`}
            >
              연예
            </button>
            <button
              onClick={() => handleTabClick("share")}
              className={`{activeTab === "share" ? "active on" : ""}`}
            >
              방송
            </button>
          </div>
        </div>
        <main className="container">
          <div>
            {activeTab === "all" && (
              <section className="all_sec">
                <h3>전체</h3>

                <ul className="contentBox">
                  <li>
                    <Link href="/">
                      <div className="imgBox">
                        <img
                          src="/img/test/sample.png"
                          fill="true"
                          alt="이미지"
                        />
                      </div>
                      <div className="infoBox">
                        <div>
                          <img src="/img/test/sample.png" alt="" />{" "}
                          <span>날득이</span>
                        </div>
                        <div>
                          <p>글제목</p>
                        </div>
                        <div>
                          <span className="hash on">공미포12자까지권장함</span>
                          <span className="hash">해시B</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </section>
            )}
            {activeTab === "myPosts" && (
              <section className="my_sec">
                <h3>연예</h3>
                <div>
                  <ul className="contentBox">
                    <li>
                      <Link href="/">
                        <div className="imgBox">
                          <img
                            src="/img/test/sample.png"
                            fill="true"
                            alt="이미지"
                          />
                        </div>
                        <div className="infoBox">
                          <div>
                            <img src="/img/test/sample.png" alt="" />{" "}
                            <span>날득이</span>
                          </div>
                          <div>
                            <p>22글제목</p>
                          </div>
                          <div>
                            <span className="hash on">해시A</span>
                            <span className="hash">해시B</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </section>
            )}
            {activeTab === "share" && (
              <section className="dist_sec">
                <h3>방송</h3>
                <div>
                  <ul className="contentBox">
                    <li>
                      <Link href="/">
                        <div className="imgBox">
                          <img
                            src="/img/test/sample.png"
                            fill="true"
                            alt="이미지"
                          />
                        </div>
                        <div className="infoBox">
                          <div>
                            <img src="/img/test/sample.png" alt="" />{" "}
                            <span>날득이</span>
                          </div>
                          <div>
                            <p>33글제목</p>
                          </div>
                          <div>
                            <span className="hash on">해시A</span>
                            <span className="hash">해시B</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </section>
            )}
          </div>
        </main>
      </HomeLayout>
    </div>
  )
}
