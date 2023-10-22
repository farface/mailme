import { Dispatch, SetStateAction } from "react";

export type ProgressProps = {
  percent: number;
};

export type PromptProps = {
  questions: readonly string[];
  userData: {
    firstname: string;
    lastname: string;
    email: string;
    date: string;
    answers: string[];
  };
  setView: Dispatch<
    SetStateAction<{
      topic: boolean;
      prompt: boolean;
      userInfo: boolean;
    }>
  >;
  setUserData: Dispatch<
    SetStateAction<{
      firstname: string;
      lastname: string;
      email: string;
      date: string;
      answers: string[];
    }>
  >;
};

export type TopicProps = {
  setView: Dispatch<
    SetStateAction<{
      topic: boolean;
      prompt: boolean;
      userInfo: boolean;
    }>
  >;
  setTopic: Dispatch<SetStateAction<number>>;
};

export type UserProps = {
  userData: {
    firstname: string;
    lastname: string;
    email: string;
    date: string;
    answers: string[];
  };
  setUserData: Dispatch<
    SetStateAction<{
      firstname: string;
      lastname: string;
      email: string;
      date: string;
      answers: string[];
    }>
  >;
};

export type ButtonProps = {
  userData: {
    firstname: string;
    lastname: string;
    email: string;
    date: string;
  };
};
