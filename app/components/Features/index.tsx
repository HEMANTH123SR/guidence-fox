import Image from "next/image";
import Link from "next/link";

interface datatype {
  imgSrc: string;
  heading: string;
  paragraph: string;
}

const Aboutdata: datatype[] = [
  {
    imgSrc: "/assets/download (2).png",
    heading: "Finding Mentor",
    paragraph:
      "Explore careers with AR/VR simulations. Experience real-world job scenarios virtually. Gain insights and make informed career choices through engaging and interactive simulations in a controlled environment.",
  },
  {
    imgSrc: "/assets/features/signal.svg",
    heading: "Personalized Learning",
    paragraph:
      "Enjoy a learning experience tailored to your pace. Our platform offers educational paths customized to your goals, focusing on what matters most with personalized guidance and resources to help you achieve success.",
  },
  {
    imgSrc: "/assets/features/time.svg",
    heading: "One-to-One Mentorship",
    paragraph:
      "Receive personalized career counseling through one-to-one mentorship. Our experts provide tailored advice and support, helping you navigate your career path with dedicated guidance to reach your professional goals.",
  },
];

export const Features = () => {
  return (
    <div className="bg-babyblue" id="features">
      <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h3 className="text-4xl sm:text-5xl font-semibold text-[#4A4B4A] text-center my-10">
          Amazing Features.
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-4 lg:gap-x-8 mt-10">
          {Aboutdata.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 featureShadow">
              <Image
                src={item.imgSrc}
                alt={item.imgSrc}
                width={55}
                height={55}
                className="mb-2"
              />
              <h3 className="text-xl font-semibold text-[#4A4B4A] mt-5">
                {item.heading}
              </h3>
              <h4 className="text-lg font-normal text-[#4A4B4A] opacity-50 my-2">
                {item.paragraph}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
