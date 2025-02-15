// import React from 'react'

const FootGrid = () => {
  return (
    <div className="grid grid-col-1 sm:grid-cols-4">
      <div>
        <h2 className="mb-[30px] opacity-50 font-bold">Our company</h2>
        <ul className="flex flex-col gap-2 font-semibold">
          <li><a href="">How we work</a></li>
          <li><a href="">Why Insure?</a></li>
          <li><a href="">View plans</a></li>
        </ul>
      </div>
      <div>
        <h2 className="mb-[30px] opacity-50 font-bold">FAQ</h2>
        <ul className="flex flex-col gap-2 font-semibold">
          <li><a href="">Terms of use</a></li>
          <li><a href="">Privacy policy</a></li>
          <li><a href="">Cookies</a></li>
        </ul>
      </div>
      <div>
        <h2 className="mb-[30px] opacity-50 font-bold">Contact</h2>
        <ul className="flex flex-col gap-2 font-semibold">
          <li><a href="">Sales</a></li>
          <li><a href="">Support</a></li>
          <li><a href="">Live chat</a></li>
        </ul>
      </div>
      <div>
        <h2 className="mb-[30px] opacity-50 font-bold">Others</h2>
        <ul className="flex flex-col gap-2 font-semibold">
          <li><a href="">Careers</a></li>
          <li><a href="">Press</a></li>
          <li><a href="">Licenses</a></li>
        </ul>
      </div>
    </div>
  );
};

export default FootGrid;
