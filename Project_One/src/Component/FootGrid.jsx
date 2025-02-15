// import React from 'react'

const FootGrid = () => {
  return (
    <div className="grid grid-col-1 sm:grid-cols-4">
      <div>
        <h2 className="mb-[30px] opacity-50 font-bold">Our company</h2>
        <ul className="flex flex-col gap-2">
          <li><a href="">How we work</a></li>
          <li><a href="">Why Insure?</a></li>
          <li><a href="">View plans</a></li>
        </ul>
      </div>
    </div>
  );
};

export default FootGrid;
