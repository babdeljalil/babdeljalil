import React from "react";

import Image from "next/image";

export default function Projects() {
  return (
    <section className="w-full flex justify-start flex-col">
      <h1>
        <span className="border-b-2 text-3xl font-modak">Projects</span>
      </h1>
      <div className="grid md:grid-cols-3 mt-7 gap-4 sm:grid-cols-2 grid-cols-1 max-sm:mx-6 place-items-center justify-items-center items-center">
        <div className="bg-[#EFEEEA] w-[260px] h-64 border rounded-lg hover:shadow-[7px_7px_0px_0px_#000000] transition-all duration-500 hover:scale-[104%] flex flex-col hover:-mt-3">
          <div className="w-full pt-2 px-2">
            <span className="font-comingsoon text-lg my-2">website name</span>
          </div>
          <div className="w-full flex justify-center items-center">
            <Image
              src=""
              alt=""
              width={500}
              height={500}
              className="w-[95%] h-28"
            />
          </div>
          <div className="w-full"></div>
        </div>
        <div className="bg-[#EFEEEA] w-[260px] h-64 border rounded-lg hover:shadow-[7px_7px_0px_0px_#000000] transition-all duration-500 hover:scale-[104%] flex flex-col hover:-mt-3">
          <div className="w-full pt-2 px-2">
            <span className="font-comingsoon text-lg my-2">website name</span>
          </div>
          <div className="w-full flex justify-center items-center">
            <Image
              src=""
              alt=""
              width={500}
              height={500}
              className="w-[95%] h-28"
            />
          </div>
          <div className="w-full"></div>
        </div>
        <div className="bg-[#EFEEEA] w-[260px] h-64 border rounded-lg hover:shadow-[7px_7px_0px_0px_#000000] transition-all duration-500 hover:scale-[104%] flex flex-col hover:-mt-3">
          <div className="w-full pt-2 px-2">
            <span className="font-comingsoon text-lg my-2">website name</span>
          </div>
          <div className="w-full flex justify-center items-center">
            <Image
              src=""
              alt=""
              width={500}
              height={500}
              className="w-[95%] h-28"
            />
          </div>
          <div className="w-full"></div>
        </div>
        <div className="bg-[#EFEEEA] w-[260px] h-64 border rounded-lg hover:shadow-[7px_7px_0px_0px_#000000] transition-all duration-500 hover:scale-[104%] flex flex-col hover:-mt-3">
          <div className="w-full pt-2 px-2">
            <span className="font-comingsoon text-lg my-2">website name</span>
          </div>
          <div className="w-full flex justify-center items-center">
            <Image
              src=""
              alt=""
              width={500}
              height={500}
              className="w-[95%] h-28"
            />
          </div>
          <div className="w-full"></div>
        </div>
        <div className="bg-[#EFEEEA] w-[260px] h-64 border rounded-lg hover:shadow-[7px_7px_0px_0px_#000000] transition-all duration-500 hover:scale-[104%] flex flex-col hover:-mt-3">
          <div className="w-full pt-2 px-2">
            <span className="font-comingsoon text-lg my-2">website name</span>
          </div>
          <div className="w-full flex justify-center items-center">
            <Image
              src=""
              alt=""
              width={500}
              height={500}
              className="w-[95%] h-28"
            />
          </div>
          <div className="w-full"></div>
        </div>
        <div className="bg-[#EFEEEA] w-[260px] h-64 border rounded-lg hover:shadow-[7px_7px_0px_0px_#000000] transition-all duration-500 hover:scale-[104%] flex flex-col hover:-mt-3">
          <div className="w-full pt-2 px-2">
            <span className="font-comingsoon text-lg my-2">website name</span>
          </div>
          <div className="w-full flex justify-center items-center">
            <Image
              src=""
              alt=""
              width={500}
              height={500}
              className="w-[95%] h-28"
            />
          </div>
          <div className="w-full"></div>
        </div>
      </div>
    </section>
  );
}
