import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const People = () => {
  return (
    <div id="product" className="mt-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1 ">
          <div className="col-span-6 flex justify-center">
            <img
              src="/ill/Message sent.png"
              alt="doing something"
              className="w-[30vw] h-auto"
            />
          </div>

          <div className="col-span-6 flex flex-col justify-center space-y-6 lg:pl-24 mt-10 lg:mt-0">
            <h1 className="text-midnightblue text-4xl text-[#4A4B4A] font-semibold text-center lg:text-start lh-143">
              Discover Your Strengths with AI
            </h1>
            <h3 className="text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-5 lg:pt-0">
              Get personalized career and educational advice with our AI-driven
              assessments. Our tool evaluates your skills and interests to offer
              tailored recommendations. Make informed decisions with insights
              designed just for you.
            </h3>
            <Link
              href={"/"}
              className="text-electricblue text-lg flex gap-2 mx-auto lg:mx-0 pt-5 lg:pt-0 text-[#4FD119] font-semibold"
            >
              Learn more <ArrowRight className="text-3xl " />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
