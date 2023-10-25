import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import Prompt from "./Prompt";
import TopicList from "./TopicList";
import UserInformation from "./UserInformation";
import { questions } from "@/data/data";
import InstructionsComp from "../Components/InstructionsComp";
import { useRouter } from "next/navigation";
import api from "../api/emails";
import { PromptUIProps } from "../types/types";

const PromptUI = ({ setLoading }: PromptUIProps) => {
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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newAnswer = userData.answers.join("\n");
    const newResponse = { ...userData, answers: newAnswer, topic: topic };

    setLoading(true);
    try {
      await api.post("/email", newResponse);

      setUserData({
        firstname: "",
        lastname: "",
        email: "",
        date: "",
        answers: [] as string[],
      });
      setTopic(0);
      navigate.push("/success");
    } catch (err: any) {
      navigate.push("/error");
    }
  };

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
