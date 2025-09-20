import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const DessertCart = createContext({
  deserts: [],
  addDesert: () => {},
  reduceItem: () => {},
  removeItem: () => {},
});

function DesertProvider({ children }) {
  const [desertSelected, setDesertSelected] = useState([]);
  console.log(desertSelected);

  const allItems = {
    deserts: desertSelected,
    addDesert: HandleAdd,
    reduceItem: handleReduce,
    removeItem: handleRemove,
    setDesertSelected
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
  function handleReduce(id) {
    setDesertSelected(
      (previousItem) =>
        previousItem
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0) // keep only items with quantity > 0
    );
  }

  function handleRemove(id) {
    setDesertSelected((previousItem) =>
      previousItem.filter((item) => id !== item.id)
    );
  }

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
