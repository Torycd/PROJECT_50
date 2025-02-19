// import React from 'react'

import Items from "./Components/Items";

const App = () => {
  return (
    <div className="flex justify-between my-[50px] mx-[150px]">
      <div>
        <h2 className="text-[32px] font-bold mb-[50px]">Desserts</h2>
        <Items />
      </div>
      <div className="">Cart</div>
    </div>
  );
};

export default App;
