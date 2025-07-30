import React from "react";
import Htmlicon from "../../assets/img/icone-html5.svg";
import Cssicon from "../../assets/img/icone-css3.svg";
import Javascripticon from "../../assets/img/icone-javascript.svg";
import Reacticon from "../../assets/img/icone-react.svg";
import Giticon from "../../assets/img/icone-git.svg";
import Tailicon from '../../assets/img/tailwind.svg'

const Icons = () => {
  return (
    <div className="mt-5 md:mt-0">
      <ul className="flex gap-8 justify-center  items-center  flex-col m-auto md:flex-row ">
        <li className="bg-white p-5 md:p-2 rounded-2xl">
          <img src={Htmlicon} alt="" />
        </li>
        <li className="bg-white  md:p-2 p-5 rounded-2xl">
          <img src={Cssicon} alt="" />
        </li>
        <li className="bg-white  md:p-2 p-5 rounded-2xl">
          <img src={Javascripticon} alt="" />
        </li>
        <li className="bg-white  md:p-2 p-5 rounded-2xl">
          <img src={Reacticon} alt="" />
        </li>
        <li className="bg-white  md:p-2 p-5 rounded-2xl">
          <img src={Giticon} alt="" />
        </li>
        <li className="bg-white  md:p-2 p-5 rounded-2xl">
          <img src={Tailicon} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default Icons;
