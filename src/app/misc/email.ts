import { Request, Response } from "express";
import dotenv from "dotenv";
import Mailjet from "node-mailjet";
import { add } from "date-fns";
import { Job } from "@hokify/agenda";
import { agenda } from "../configs/agenda";
import { ResponseProps, JobData } from "../types/types";

dotenv.config();

const generateRandom = (min: number, max: number) => {
  const difference = max - min;

  let random = Math.random();
  random = Math.floor(random * difference);
  random = random + min;
  return random;
};

const generateDate = (option: string) => {
  switch (option) {
    case "1week":
      return generateRandom(7, 14);
    case "2week":
      return generateRandom(14, 21);
    case "1month":
      return generateRandom(30, 60);
    default:
      return generateRandom(0, 3);
  }
};

export const sendEmail = async (req: Request, res: Response) => {
  // options: 1 week, 2 weeks 1 month

  const { firstname, lastname, email, date, answers }: ResponseProps = req.body;
  const scheduleTime = add(new Date(), { minutes: generateDate(date) });
  console.log(scheduleTime.toLocaleTimeString());
  let fullname = firstname + " " + lastname;

  /* Data Validation */
  if (fullname === "") {
    fullname = "User";
  }

  if (!email || !date || !answers) {
    return res.status(400).json({
      error: "missing properties, email, date, and answers are required!",
    });
  }

  /* chatgpt generate body
  const body = ...
  */
  let body = "";
  answers.forEach((value) => {
    body += value + " ";
  });

  try {
    const job = await agenda.schedule(scheduleTime, "sendEmail", {
      email,
      fullname,
      body,
      date,
    });

    if (job) {
      defineJob();
      res.status(200).json({ success: true });
    }
  } catch (err) {
    console.log(err, "err");
  }
};

const mailJob = async (job: Job<JobData>, done: (error?: Error) => void) => {
  const { email, fullname, body, date } = job.attrs.data;
  const mailjet = new Mailjet({
    apiKey: process.env.MAILJET_API_KEY,
    apiSecret: process.env.MAILJET_API_SECRET,
  });

  mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "mail.me@lexiechoi.com",
          Name: "Mail Me",
        },
        To: [
          {
            Email: email,
            Name: fullname,
          },
        ],
        Subject: `Dear ${fullname}, thank you for trusting mailme, we hope you enjoy your email`,
        HTMLPart: `
        <h1>${body}, ${date}</h1> 
        <br />
        `,
      },
    ],
  });
  done();
};
export const defineJob = async () => {
  agenda.define("sendEmail", mailJob);

  await new Promise((resolve) => agenda.once("ready", resolve));
};
