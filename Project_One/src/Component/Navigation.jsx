import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Button from "./Button";
import Logo from "../assets/images/logo.svg";

const Navigation = () => {
  const [navigation, setNavigation] = useState(false);
  const style = "text-gray-500 hover:text-black duration-200 cursor-pointer";

  const handleNavigation = () => {
    setNavigation(!navigation);
  };

  return (
    <div className="w-screen overflow-hidden">
      <div className="flex justify-between max-w-[1440px] m-5 sm:mx-auto sm:my-5 font-Karla items-center">
        <img src={Logo} alt="logo" />
        <div className="hidden lg:block">
          <ul className="flex uppercase space-x-10 text-[16px] font-semibold items-center">
            <li className={style} end>
              How we work
            </li>
            <li className={style}>Blog</li>
            <li className={style}>Account</li>
            <Button styling="border-black">view plans</Button>
          </ul>
        </div>
        <div
          className="md:hidden p-2 border-2 border-black"
          onClick={handleNavigation}
        >
          {navigation ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
      </div>
      <div
        className={
          navigation
            ? "flex flex-col fixed right-0  w-[100%] z-50 border-r h-full bg-black text-white ease-in-out duration-500 sm:hidden"
            : "fixed right-[-100%]"
        }
      >
        <div className="w-full flex justify-center">
          <ul className="flex flex-col mt-5 items-center text-center uppercase ml-10 space-y-[40px] font-normal text-2xl">
            <li>How we work</li>
            <li>Blog</li>
            <li>Acounts</li>
            <Button styling="hover:bg-black hover:text-white">
              view plans
            </Button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
