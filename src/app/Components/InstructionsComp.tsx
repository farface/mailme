import React from "react";
import Image from "next/image";
import info from "@/images/Info.png";

const InstructionsComp = () => {
  return (
    <section className="flex justify-end w-full">
      {/* Info Button */}
      <div title="Instructions" className="peer z-50 ">
        <Image src={info} width={30} alt="Info Icon" />
      </div>
      {/* Instructions */}
      <div className=" w-full min-h-full lg:w-[31rem] lg:h-[445px] text-black bg-inputBackgrounds hidden peer-hover:block peer-active:block absolute z-10">
        <h2 className="text-center ">Instructions</h2>
        <div className="mx-2">
          Welcome to Mailme, it's as easy as 123!
          <div>1. Choose a Topic</div>
          <div>2. Answer the Questions</div>
          <div>
            3. Fill out your info, pick a date and wait for your future email.
          </div>
          <br />
          <div>
            The inspiration for this project came from Cantek IT. Cantek is a
            program that helps newcomers to Canada with previous software
            developement work experience in their home countries adapt and
            transition to the Canadian work style.
          </div>
          <div className="mt-4">
            To build this web app we used,
            <div>Frontend: Nextjs, Typescript, and Tailwind.</div>
            <div>Backend: Nodejs, Expressjs, and Typescript </div>
            <div>Database: MongoDB </div>
            <div>
              Packages: Mailjet (for sending email) Agenda (for scheduling
              emails) and ChatGPT-3.5 (to generate email body)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructionsComp;
