// import { useContext } from "react";
// import { CartContext } from "../Store/DessertContext";

import Card from "./Card";
import { DUMMY_ITEMS } from "../Store/dummy-item";

const Items = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {DUMMY_ITEMS.map((item) => (
        <Card
          key={item.id}
          item={item}
          // name={item.name}
          // title={item.type}
          // price={item.price}
          // image={item.image}
        />
      ))}
    </div>
  );
};

export default Items;
