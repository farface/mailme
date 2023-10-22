import { topics } from "@/data/data";
import { TopicProps } from "../types/types";

const TopicList = ({ setView, setTopic }: TopicProps) => {
  return (
    <ul className="w-full my-10 lg:mt-20">
      {topics.map((topic) => (
        <button
          key={topic.id}
          className="w-full h-12 border-b-2 first:border-t-2 border-buttonBottomBorder hover:bg-activeBackground uppercase"
          onClick={() => {
            setView({ topic: false, prompt: true, userInfo: false });
            setTopic(topic.id);
          }}
        >
          {topic.name}
        </button>
      ))}
    </ul>
  );
};

export default TopicList;
