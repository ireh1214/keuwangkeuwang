import Header from "@/components/Header"

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <div className="slideContainer">{/* 슬라이드 영역 */}</div>
      {children}
    </>
  )
}
