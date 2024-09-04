import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Feather,
  GraduationCap,
  Briefcase,
  UserRound,
} from "lucide-react";

interface FeatureItem {
  imgSrc: string;
  heading: string;
  paragraph: string;
}

const featureData: FeatureItem[] = [
  {
    imgSrc: "/assets/mentor.svg",
    heading: "Find Mentor",
    paragraph:
      "AI-powered 1:1 mentorship program connecting students with industry professionals. Personalized guidance, real-world insights, and dedicated support through individual virtual sessions.",
  },
  {
    imgSrc: "/assets/future-finder.svg",
    heading: "Find Your Career",
    paragraph:
      "Immersive career discovery tool using AI and VR/AR. Assesses aptitudes, simulates work environments, and provides personalized career recommendations based on individual profiles and market trends.",
  },
  {
    imgSrc: "/assets/uni-navigator.svg",
    heading: "Find College and Uni",
    paragraph:
      "Comprehensive university search engine with AI-driven recommendations. Features virtual campus tours, program comparisons, and application tracking to help students find their ideal higher education fit.",
  },
];

const FeatureCard: React.FC<FeatureItem> = ({ imgSrc, heading, paragraph }) => (
  <div className="border border-gray-200 rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white">
    <div className="p-3 inline-block mb-4 bg-blue-50 rounded-full">
      <UserRound
        className={`text-[#4FD119] text-2xl ${
          imgSrc == "/assets/mentor.svg" ? "" : "hidden"
        }`}
      />
      <Briefcase
        className={`text-[#4FD119] text-2xl ${
          imgSrc == "/assets/future-finder.svg" ? "" : "hidden"
        }`}
      />
      <GraduationCap
        className={`text-[#4FD119] text-2xl ${
          imgSrc == "/assets/uni-navigator.svg" ? "" : "hidden"
        }`}
      />
    </div>
    <h3 className="text-2xl font-bold text-[#4A4B4A] mb-3">{heading}</h3>
    <p className="text-gray-600 mb-6">{paragraph}</p>
    <Link
      href="/"
      className="inline-flex items-center text-[#45D62F] font-semibold hover:text-[#4A4B4A] transition-colors duration-200"
    >
      Learn more <ArrowRight className="ml-2 w-5 h-5" />
    </Link>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="border rounded-xl py-20" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4A4B4A] mb-4">
            Amazing Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore your future with our AI assessments, immersive AR/VR
            simulations, expert mentorship, and interactive tools. Unlock your
            potential with personalized guidance and innovative technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-7">
          {featureData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
