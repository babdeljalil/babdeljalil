import Image from "next/image";

import profile from "../../../public/babdeljalil-profile.jpeg";

export default function Hero() {
  return (
    <section className="flex max-md:flex-col w-full py-20">
      <div className="w-1/2 max-md:w-full flex flex-col justify-center items-center">
        <h1 className="text-start w-full my-3 text-4xl font-bagel">
          front-end developer
        </h1>
        <p className="text-start w-full my-3 font-comingsoon">
          Hi, I’m Berhil Abdeljalil, an frontend developer. I
          make website for living.
        </p>
        <div className="font-nunito font-bold">
          github | ig | linkedin | blog | projects | portfolio
        </div>
      </div>
      <div className="w-1/2 max-md:w-full px-16 max-md:py-10 max-md:px-6">
        <Image
          src={profile}
          alt=""
          width={250}
          height={250}
          className="object-cover object-top h-72 w-72 rounded-md"
        />
      </div>
    </section>
  );
}
