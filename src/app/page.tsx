"use client";
import PromptUI from "./Components/PromptUI";
import Image from "next/image";
import mailBox from "@/images/mailBox.png";
import Footer from "./Components/Footer";
import LoadingScreen from "./Components/LoadingScreen";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <main>
        {loading ? (
          <LoadingScreen />
        ) : (
          <div className=" min-h-screen max-w-[1440px] mx-auto pt-4">
            <h1 className="text-3xl text-center">Mailme</h1>
            <h2 className="text-center uppercase mb-12">
              Send an AI generated email to your future self
            </h2>
            <div className="flex flex-col lg:flex-row lg:justify-around lg:mx-auto relative">
              <PromptUI setLoading={setLoading} />
              <Image
                src={mailBox}
                width={375}
                height={380}
                alt="mail box"
                className="mx-auto lg:mx-0"
              />
            </div>
          </div>
        )}
      </main>
      <footer className="md:absolute md:bottom-0 md:left-1/2 md:-translate-x-1/2 pb-4">
        <Footer />
      </footer>
    </>
  );
}
