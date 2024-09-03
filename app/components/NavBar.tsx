import { get } from "https";
import Image from "next/image";
export const NavBar = () => {
  return (
    <header className="w-screen flex justify-between">
      {/* logo */}
      <div className="flex flex-row  space-x-3 justify-center items-center">
        {/* <img src={getRandomFoxyExpression()} alt="foxy" className="h-14 w-14 max-h-14 max-w-14"/> */}
        
        <h1 className="text-2xl font-bold text-orange-600">Dio</h1>
      </div>
      {/* lanquage */}
    </header>
  );
};

function getRandomFoxyExpression(): string {
  const foxyExpression: string[] = [
    "/foxy-expression/attitude.png",
    "/foxy-expression/calm.png",
    "/foxy-expression/closed-eye.png",
    "/foxy-expression/crying.png",
    "/foxy-expression/dark.png",
    "/foxy-expression/happy.png",
    "/foxy-expression/in-love.png",
    "/foxy-expression/planning-something-bad.png",
    "/foxy-expression/scared.png",
    "/foxy-expression/sleepy.png",
  ];
  const randomIndex = Math.floor(Math.random() * foxyExpression.length);
  return foxyExpression[randomIndex];
}
