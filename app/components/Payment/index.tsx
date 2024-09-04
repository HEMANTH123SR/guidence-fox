// import Image from 'next/image';
// import Link from 'next/link';

// const Payment = () => {
//   return (
//     <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
//       <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
//         <div className="col-span-6 flex justify-center">
//           <Image
//             src="/assets/Landscape mode-bro.svg"
//             alt="payment"
//             width={600}
//             height={600}
//           />
//         </div>

//         <div className="col-span-6 flex flex-col justify-center mb-32">
//           <h2 className="text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-143">
//             Linguistic Feature: Learn in Your Preferred Regional Language
//           </h2>
//           <h3 className="text-black text-lg font-normal text-center lg:text-start lh-173 opacity-75 pt-3">
//             Access career guidance and educational resources in your preferred
//             regional language. Our platform ensures a comfortable and effective
//             learning experience by adapting to your language preferences.
//             Embrace seamless learning without language barriers.
//           </h3>
//           <Link
//             href={'/'}
//             className="text-electricblue text-lg font-medium flex gap-2 pt-4 mx-auto lg:mx-0"
//           >
//             Learn more{' '}
//             <Image
//               src="/assets/people/arrow-right.svg"
//               alt="arrow-right"
//               width={24}
//               height={24}
//             />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Payment = () => {
  return (
    <div id="product" className="mb-32">
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

export default Payment;
