import React from "react";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import MenuMoblie from "./MenuMoblie";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      {/* menu desktop */}
      <nav className="">
        <ul className=" hidden md:flex gap-6 ">
          <li>
            <a className="font-a" href="#">
              Sobre
            </a>
          </li>
          <li>
            <a className="font-a" href="#">
              Habilidades
            </a>
          </li>
          <li>
            <a className="font-a" href="#">
              Projetos
            </a>
          </li>
          <li>
            <a
              className="font-a btn-contato text-color-[#333] hover:bg-[#007BFF] hover:text-[#ffffff] animate duration-300 ease-in"
              href="#"
            >
              Contato
            </a>
          </li>
          {/* menu moblie */}
        </ul>
        <button
          className="flex items-center md:hidden cursor-pointer"
          onClick={handleNav}
        >
          {!nav && <AiOutlineMenu size={24} />}
        </button>
        {nav && <MenuMoblie handleNav={handleNav} />}
      </nav>
    </>
  );
};

export default NavBar;
