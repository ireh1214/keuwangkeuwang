import Image from "next/image";
import CommonInput from "@/components/CommonInput";
import Title from "@/components/Title";
import "../scss/common.scss";


export default function Home() {
  return (
    <main>
      컴포넌트 작성
      <CommonInput />
      <Title title="안녕하세요! Hello World!" />
    </main>
  );
}
