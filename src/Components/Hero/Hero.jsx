import React from "react";
import HeroSvg from "../../assets/img/hero-programming.svg";
import ButtonCurriculo from "../../Help/ButtonCurriculo";

const Hero = () => {
  return (
    <>
      <section className="mt-5 md:mt-[120px] md:max-w-[1340px] justify-center flex items-center m-auto ">
        <div className="flex flex-col  mt-[20px] md:flex-row md:gap-5">
          <div className="">
            <img src={HeroSvg} alt="Hero" />
          </div>
          <div className="py-5">
            <h1 className="font-bold text-4xl font-monteserrat md:text-6xl text-center md:text-left md:flex-nowrap text-[#4A4A4A] ">
              Olá! Meu Nome é <span className="text-[#007BFF]">Alan</span>
            </h1>
            <div>
              <p className="md:w-[705px] font-monteserrat py-5 text-center md:text-left ">
                Sou formado em Análise e Desenvolvimento de Sistemas e venho da
                segurança privada, em transição para a área de tecnologia. Minha
                experiência me deu foco e atenção aos detalhes, qualidades que
                agora aplico na criação de soluções.
              </p>
            </div>
            <a
              href="https://drive.google.com/file/d/1R38MYLqxuCxFJMFRqUCUqCIy7YHwPFUr/view?usp=drive_link"
              target="_blank"
            >
              <ButtonCurriculo>Curriculo</ButtonCurriculo>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
