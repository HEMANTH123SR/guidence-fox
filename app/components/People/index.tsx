import Image from "next/image";
import Link from "next/link";

const People = () => {
  return (
    <div id="product" className="pt-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1 ">
          <div className="col-span-6 flex justify-center">
            <img
              src="/ill/Education.png"
              alt="doing something"
              className="w-[32vw] h-auto"
            />
          </div>

          <div className="col-span-6 flex flex-col justify-evenly lg:pl-24 mt-10 lg:mt-0">
            <h1 className="text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143">
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
              className="text-electricblue text-lg font-medium flex gap-2 mx-auto lg:mx-0 pt-5 lg:pt-0"
            >
              Learn more{" "}
              <Image
                src="/assets/people/arrow-right.svg"
                alt="arrow-right"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
