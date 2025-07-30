import React from "react";
import {AiOutlineClose } from "react-icons/ai";

const MenuMoblie = ({ handleNav }) => {
  return (
    <>
      <nav className="relative">
        <button
          className="md:hidden absolute  cursor-pointer top-[-15px] right-[0px] " // 
          onClick={handleNav} //
        >
          <AiOutlineClose size={24} />
        </button>
          <ul className=" flex md:hidden gap-6 flex-col p-4 absolute z-40 bg-[#F3F4F6] shadow-md/10 rounded-2xl top-10 left-[-260px]">
            <li>
              <a className="font-a px-4 py-2" href="#">
                Sobre
              </a>
            </li>
            <li>
              <a className="font-a px-4 py-2" href="#">
                Habilidades
              </a>
            </li>
            <li>
              <a className="font-a px-4 py-2" href="#">
                Projetos
              </a>
            </li>
            <li>
              <a
                className="font-a btn-contato text-color-[#333] hover:bg-[#007BFF] hover:text-[#ffffff] animate duration-300 ease-in block w-[240px]"
                href="#"
              >
                Contato
              </a>
            </li>
          </ul>
      </nav>
    </>
  );
};

export default MenuMoblie;
