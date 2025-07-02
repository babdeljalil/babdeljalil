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
            Hi, I’m Berhil Abdeljalil, a frontend developer from Morocco 🇲🇦. I
            make symphonies out of sneezing dust particles in the space between
            your blinks.
          </p>{" "}
          <div className="w-full flex justify-end">
            <div className="flex items-center">
              <a href="https://github.com/babdeljalil" target="_blank">
                <Image
                  src="icons/github.svg"
                  alt=""
                  width={500}
                  height={500}
                  className="h-7 mx-1.5 w-fit"
                />
              </a>
              <a href="https://x.com/babdeljalil17" target="_blank">
                <Image
                  src="icons/x.svg"
                  alt=""
                  width={500}
                  height={500}
                  className="h-7 mx-1.5 w-fit"
                />
              </a>
              <a href="https://instagram.com/babdeljalil.my" target="_blank">
                <Image
                  src="icons/instagram.svg"
                  alt=""
                  width={500}
                  height={500}
                  className="h-7 mx-1.5 w-fit"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/abdeljalil-berhil-302a92367/"
                target="_blank"
              >
                <Image
                  src="icons/linkedin.svg"
                  alt=""
                  width={500}
                  height={500}
                  className="h-7 mx-1.5 w-fit"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full justify-center items-center flex font-bold my-4">
        <span>© 2025 BAbdeljalil. All rights reserved.</span>
      </div>
    </footer>
  );
}
