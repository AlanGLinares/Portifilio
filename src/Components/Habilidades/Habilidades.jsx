import React from "react";
import Icons from "./Icons";

const Habilidades = () => {
  return (
    <section className="mt-5 md:mt-[120px] py-5 flex  bg-[#F3F4F6] h-max md:h-[120px]">
      <div className="w-full md:flex md:items-center md:gap-8">
        <div className="">
          <h1 className="text-center md:ml-96 font-bold text-4xl font-monteserrat md:text-6xl md:text-left md:flex-nowrap text-[#4A4A4A]">
            Habilidades
          </h1>
        </div>
        <Icons />
      </div>
    </section>
  );
};

export default Habilidades;
