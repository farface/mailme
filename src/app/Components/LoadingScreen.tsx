import Image from "next/image";
import mailBox from "@/images/mailBox.png";
const LoadingScreen = () => {
  return (
    <div className="min-h-screen relative flex flex-col justify-center items-center">
      <div className="animate-bounce rounded-full h-32 w-32 border-t-4 border-b-4 border-progress-bar">
        <Image
          src={mailBox}
          width={375}
          height={380}
          alt="mail box"
          className="mx-auto lg:mx-0"
        />
      </div>
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-progress-bar"></div>
      <p>Building your letter...</p>
    </div>
  );
};

export default LoadingScreen;
