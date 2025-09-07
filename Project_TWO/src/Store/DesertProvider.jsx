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
    // Handle both existing anf no existing deserts
    if (itm.id)
      setDesertSelected((previousItem) => {
        const existing = previousItem.find((i) => i.id == itm.id);
        // console.log(existing);
        if (existing) {
          return previousItem.map((ds) =>
            ds.id === itm.id ? { ...ds, quantity: ds.quantity + 1 } : ds
          );
        }
        // Spread previous deserts in the list and then spread the particular item and only update its quantity
        return [...previousItem, { ...itm, quantity: 1 }];
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
