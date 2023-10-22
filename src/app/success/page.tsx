import Image from "next/image";
import React from "react";
import success from "@/images/success.png";
import Link from "next/link";

const SuccessPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1>Mailme</h1>
      <Image src={success} alt="Post request was Successful" />
      <div className="text-center">
        {" "}
        <div>Congragulations,</div> your email has been sent
      </div>
      <Link href={"/"} className="hover:text-lime-100 mt-8">
        Back to Home
      </Link>
    </div>
  );
};

export default SuccessPage;
