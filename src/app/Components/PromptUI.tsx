"use client";
import { FormEvent, useState } from "react";
import Prompt from "./Prompt";
import TopicList from "./TopicList";
import UserInformation from "./UserInformation";
import { questions } from "@/data/data";
import InstructionsComp from "../Components/InstructionsComp";
import SubmitButton from "./SubmitButton";
import { useRouter } from "next/navigation";

const PromptUI = () => {
  const [view, setView] = useState({
    topic: true,
    prompt: false,
    userInfo: false,
  });

  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    date: "",
    answers: [] as string[],
  });
  const [topic, setTopic] = useState(0);
  const navigate = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    /* change to clear after Post Request */
    setUserData({
      firstname: "",
      lastname: "",
      email: "",
      date: "week",
      answers: [] as string[],
    });

    navigate.push("/success");
  };
  /*   add post request after form is submitted*/

  return (
    <form
      id="formData"
      className="lg:w-[445px] lg:h-[445px] bg-neutral-700  rounded-xl relative"
      onSubmit={(e) => handleSubmit(e)}
    >
      <InstructionsComp />
      {view.topic && <TopicList setView={setView} setTopic={setTopic} />}
      {view.prompt && (
        <Prompt
          questions={questions[topic]}
          setView={setView}
          userData={userData}
          setUserData={setUserData}
        />
      )}
      {view.userInfo && (
        <UserInformation userData={userData} setUserData={setUserData} />
      )}
    </form>
  );
};

export default PromptUI;
