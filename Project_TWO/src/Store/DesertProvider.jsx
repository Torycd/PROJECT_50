import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

import { DUMMY_ITEMS } from "./dummy-item";

const DessertCart = createContext({
  deserts: [],
  addDesert: () => {},
  reDuceItem: () => {},
});

function DesertProvider({ children }) {
  const [desertSelected, setDesertSelected] = useState([]);
  console.log(desertSelected);
  const allItems = {
    deserts: desertSelected,
    addDesert: HandleAdd,
    reDuceItem: handleRemove,
  };

  function HandleAdd(itm) {
    // setDesertSelected((previousItem) => [...previousItem, itm]);
    if (itm.id)
      setDesertSelected((previousItem) => {
        const existing = previousItem.find((i) => i.id === itm.id);
        if (existing) {
          return previousItem.map((ds) =>
            ds.id === itm.id ? { ...ds, quantity: ds.quantity + 1 } : i
          );
        }

        return [...previousItem, { itm, quantity: 1 }];
      });
  }

  function handleRemove() {}
  return (
    <DessertCart.Provider value={allItems}>{children}</DessertCart.Provider>
  );
}

function usePost() {
  const context = useContext(DessertCart);
  return context;
}

export { DesertProvider, usePost };

DesertProvider.propTypes = {
  children: PropTypes.node,
};
