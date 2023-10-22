import error from "@/images/error.png";
import Image from "next/image";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1>Mailme</h1>
      <Image src={error} alt="Post request Failed" />
      <Link href={"/"} className="hover:text-lime-100">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
