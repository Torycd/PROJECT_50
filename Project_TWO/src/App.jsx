// import React from 'react'

import Cart from "./Components/Cart";
import Items from "./Components/Items";

const App = () => {
  return (
    <div className="bg-rose-50 h-full w-full py-[50px] px-[150px] font-Red">
      <div className="flex justify-between gap-5">
        <div className="w-[70%]">
          <h2 className="text-[32px] font-bold mb-[50px]">Desserts</h2>
          <Items />
        </div>
        <div className="w-[30%] ">
        <Cart />
        </div>
      </div>
    </div>
  );
};

export default App;
