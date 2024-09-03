import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BiSolidSchool } from "react-icons/bi";
import { LiaUniversitySolid } from "react-icons/lia";

export const SectionAccordion = () => {
  return (
    <div className="w-9/12 space-x-4  mx-auto space-y-4">
      <div className="grid grid-cols-2 gap-8">
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
            <AccordionContent>Math (NCERT) content goes here.</AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="college/uni">
            <AccordionTrigger>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-[#45D62F] border text-white rounded-full flex items-center justify-center mr-2">
                  {/* <FaUniversity className="text-4xl"/> */}
                  {/* <BiSolidSchool className="text-4xl" /> */}
                  <LiaUniversitySolid className="text-4xl" />
                </div>
                <span className="text-2xl text-[#4A4B4A] font-semibold">
                  College/Uni
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Science (NCERT) content goes here.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
