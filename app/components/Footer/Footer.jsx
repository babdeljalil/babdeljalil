import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full mt-28 mb-16 justify-between flex flex-col px-6">
      <div className="w-full justify-between flex border-b-2 pb-4 max-md:flex-col">
        <div className="flex flex-col h-full mr-7">
          <div className="font-nunito font-bold text-lg my-0.5 border-b-2 w-fit">
            Home
          </div>
          <div className="font-nunito font-bold text-lg my-0.5 border-b-2 w-fit">
            Blog
          </div>
          <div className="font-nunito font-bold text-lg my-0.5 border-b-2 w-fit">
            Projects
          </div>
          <div className="font-nunito font-bold text-lg my-0.5 border-b-2 w-fit">
            Portfolio
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <p className="w-[70%] text-lg font-bold max-md:my-6">
            Orchestras composed entirely of sneezing dust particles perform
            symphonies in the spaces between your blinking patterns.
          </p>{" "}
          <div className="w-full flex justify-end">
            <div className="flex items-center">
              <Image
                src="icons/github.svg"
                alt=""
                width={500}
                height={500}
                className="h-7 mx-1.5 w-fit"
              />
              <Image
                src="icons/x.svg"
                alt=""
                width={500}
                height={500}
                className="h-7 mx-1.5 w-fit"
              />
              <Image
                src="icons/instagram.svg"
                alt=""
                width={500}
                height={500}
                className="h-7 mx-1.5 w-fit"
              />
              <Image
                src="icons/linkedin.svg"
                alt=""
                width={500}
                height={500}
                className="h-7 mx-1.5 w-fit"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full justify-center items-center flex font-bold my-4">
        <span>© 2025 Zaggonaut. All rights reserved.</span>
      </div>
    </footer>
  );
}
