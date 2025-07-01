import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex max-md:flex-col w-full py-20">
      <div className="w-1/2 max-md:w-full flex flex-col justify-center items-center">
        <h1 className="text-start w-full my-3 text-4xl font-bagel">
          front-end developer
        </h1>
        <p className="text-start w-full my-3 font-comingsoon">
          Hi, I’m Berhil Abdeljalil, an frontend developer from Morocco 🇲🇦. I
          make website for living.
        </p>
        <div className="font-nunito font-bold">
          github | ig | linkedin | blog | projects | portfolio{" "}
        </div>
      </div>
      <div className="w-1/2 max-md:w-full px-16 max-md:py-10 max-md:px-6">
        <Image
          src="https://images.pexels.com/photos/3694884/pexels-photo-3694884.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
          width={500}
          height={500}
          className="object-cover object-top"
        />
      </div>
    </section>
  );
}
