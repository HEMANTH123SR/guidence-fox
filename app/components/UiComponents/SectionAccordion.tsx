import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BiSolidSchool } from "react-icons/bi";
import { LiaUniversitySolid } from "react-icons/lia";
import { FaSchool } from "react-icons/fa";
import { PiBuildingApartmentFill } from "react-icons/pi";

import Link from "next/link";

export const SectionAccordion = () => {
  return (
    <div className="w-11/12 space-x-4  mx-auto space-y-4">
      <div className="grid grid-cols-3 gap-8">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="school">
            <AccordionTrigger>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-[#45D62F]  border text-white rounded-full flex items-center justify-center mr-2">
                  <BiSolidSchool className="text-4xl" />
                </div>
                <span className="text-2xl text-[#4A4B4A] font-semibold">
                  School
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="bg-slate-50  border-b-2 ">
              <div className="flex flex-col justify-center items-center space-y-4 py-6 font-semibold">
                <Link
                  href={"/"}
                  className="text-[#564B4A] uppercase tracking-wide"
                >
                  job simulation
                </Link>
                <Link
                  href={"/"}
                  className="text-[#564B4A] uppercase tracking-wide"
                >
                  find your intrest
                </Link>
                <Link
                  href={"/"}
                  className="text-[#564B4A] uppercase tracking-wide"
                >
                  Guide
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="high-school">
            <AccordionTrigger>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-[#45D62F] border text-white rounded-full flex items-center justify-center mr-2">
                  <FaSchool className="text-4xl" />
                </div>
                <span className="text-2xl text-[#4A4B4A] font-semibold">
                  High School
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="bg-slate-50 border-b-2">
              <div className="flex flex-col justify-center items-center space-y-4 py-6 font-semibold">
                <Link
                  href={"/"}
                  className="text-[#564B4A] hover:underline uppercase tracking-wide"
                >
                  carrer roadmap
                </Link>
                <Link
                  href={"/"}
                  className="text-[#564B4A] hover:underline uppercase tracking-wide"
                >
                  expolore mentorship
                </Link>
                <Link
                  href={"/"}
                  className="text-[#564B4A] hover:underline uppercase tracking-wide"
                >
                  find your intrest
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="college/uni">
            <AccordionTrigger>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-[#45D62F] border text-white rounded-full flex items-center justify-center mr-2">
                  <PiBuildingApartmentFill className="text-4xl" />
                </div>
                <span className="text-2xl text-[#4A4B4A] font-semibold">
                  College/Uni
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="bg-slate-50 border-b-2">
              <div className="flex flex-col justify-center items-center space-y-4 py-6 font-semibold">
                <Link
                  href={"/"}
                  className="text-[#564B4A] hover:underline uppercase tracking-wide"
                >
                  find college/uni
                </Link>
                <Link
                  href={"/"}
                  className="text-[#564B4A] hover:underline uppercase tracking-wide"
                >
                  expolore mentorship
                </Link>
                <Link
                  href={"/"}
                  className="text-[#564B4A] hover:underline uppercase tracking-wide"
                >
                  find your intrest
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
