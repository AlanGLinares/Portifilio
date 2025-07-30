import React from "react";
import btnCurriculo from "../css/ButtonCurriculo.module.css";

const ButtonCurriculo = ({ children }) => {
  return (
    <button className={`${btnCurriculo.btnCurriculo} font-bold cursor-pointer m-auto md:ml-[0px]`}>
      {children}
      <div>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 8V20M16 20L11 15M16 20L21 15"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M23 22H9C8.44772 22 8 22.4477 8 23C8 23.5523 8.44772 24 9 24H23C23.5523 24 24 23.5523 24 23C24 22.4477 23.5523 22 23 22Z"
            fill="white"
          />
        </svg>
      </div>
    </button>
  );
};

export default ButtonCurriculo;
