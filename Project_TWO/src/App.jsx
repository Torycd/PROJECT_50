// import React from 'react'

import Items from "./Components/Items";

const App = () => {
  return (
    <div className="flex justify-between m-20">
      <div>
        <h2 className="text-[32px] font-bold mb-[40px]">Desserts</h2>
        <Items />
      </div>
      <div>Cart</div>
    </div>
  );
};

export default App;
