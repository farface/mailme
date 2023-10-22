import { useState } from "react";
import { PromptProps } from "../types/types";
import ProgressBar from "./ProgressBar";

const Prompt = ({ questions, setView, userData, setUserData }: PromptProps) => {
  const [questionIdx, setQuestionIdx] = useState(0);
  const [percent, setPercent] = useState(20);
  const [inputValue, setInputValue] = useState("");
  const disabled = inputValue === "" ? true : false;

  const handleNext = () => {
    setUserData({
      ...userData,
      answers: [...userData.answers, inputValue],
    });
    if (percent < 99) {
      setPercent((prev) => prev + 20);
      setQuestionIdx((prev) => prev + 1);
      setInputValue("");
    } else {
      setView({
        topic: false,
        prompt: false,
        userInfo: true,
      });
    }
  };

  return (
    <div className="mx-2 relative ">
      <ProgressBar percent={percent} />
      {/* Success */}

      <div className="mb-6 ">
        <label htmlFor="success" className="block mb-2 text-sm font-medium">
          {questions[questionIdx]}
        </label>
        <input
          type="text"
          id="success"
          className="bg-inactiveInput border text-l text-black rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 "
          placeholder="Answer"
          required
          onKeyDown={(e) => {
            if (e.key === "Enter" && inputValue !== "") {
              e.preventDefault();
              handleNext();
            }
          }}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </div>

      <button
        type="button"
        className="text-white absolute right-3 mt-2 bg-inactiveInput hover:bg-activeBackground focus:ring-4 focus:outline-none focus:ring-buttonBottomBorder font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center "
        style={{ backgroundColor: disabled ? "#9F9F9F" : "" }}
        disabled={disabled}
        onClick={handleNext}
        aria-label="next"
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>
  );
};
export default Prompt;
