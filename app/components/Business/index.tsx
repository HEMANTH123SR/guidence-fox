import Image from "next/image";
import { ArrowRight } from "lucide-react";

import Link from "next/link";

const Business = () => {
  return (
    <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6 ">
      <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
        <div className="col-span-6 flex space-y-4 flex-col justify-center">
          <h2 className="text-midnightblue text-4xl text-[#4A4B4A] font-semibold text-center lg:text-start lh-143">
            AR/VR Integration: Immerse in Real-World Job Simulations
          </h2>
          <h3 className="text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3">
            Engage in fun and interactive career-themed games designed to make
            learning about professions exciting. Test your skills, explore new
            interests, and stay motivated while gaining valuable career
            insights. Enjoy a playful approach to discovering your future!
          </h3>
          <Link
            href={"/"}
            className="text-electricblue text-lg flex gap-2 mx-auto lg:mx-0 pt-5 lg:pt-0 text-[#4FD119] font-semibold"
          >
            Learn more <ArrowRight className="text-3xl " />
          </Link>
        </div>

        <div className="col-span-6 flex justify-center mt-10 lg:mt-0">
          <img
            src="/ill/Technologies.png"
            alt="doing something"
            className="w-[30vw] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Business;
