import React from "react";
import NavBar from "./NavBar";

const Header = () => {

  return (
    <header className="shadow-md/10 p-2 w-full ">
      <div className="flex items-center justify-between h-[60px] md:max-w-[1340px] mx-auto p-2">
        <div>
          <a href="">
            <p className="font-a font-bold">
              Alan<span className="font-normal">Linares</span>
            </p>
          </a>
        </div>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
