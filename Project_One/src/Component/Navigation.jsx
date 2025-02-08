// import { useState } from "react";
import { } from 'react-icons/fa'

const Navigation = () => {
//   const [showNav, setShowNav] = useState();
//   const [navigation, setNavigation] = useState();

  return (
    <div className="flex justify-between lg:mx-20 lg:my-5">
      <h2 className="text-[26px] font-bold font-Karla" >INSURE</h2>
      <div className="hidden lg:block">
        <ul className="flex uppercase space-x-5">
            <li>How we work</li>
            <li>Blog</li>
            <li>Account</li>
        </ul>
      </div>
      <div className="md:hidden" >h</div>
    </div>
  );
};

export default Navigation;
