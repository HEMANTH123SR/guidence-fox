import Image from "next/image";
import Zlayout from "./components/Zlayout";

export default function Home() {
  return (
    <main className="flex h-[23000px] flex-col items-center justify-between p-24">
      {/* <div
        className="h-[95vh] w-screen"
        style={{ backgroundImage: "url('/background.svg')" }}
      ></div> */}
      <Zlayout />
    </main>
  );
}
