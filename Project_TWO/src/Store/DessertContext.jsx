import PropTypes from "prop-types";

import { createContext, useState } from "react";
import { DUMMY_ITEMS } from "./dummy-item";

export const CartContext = createContext({
  items: [], // object empty array
  addDesert: () => {},
  reduceDesert: () => {},
  updateCartoon: () => {},
});

export function DesertContextProvider({ children }) {
  const [desertOrder, setDesertOrder] = useState({
    items: [],
  });
  const HandlesAddingCartoon = (id) => {
    // handles adding desert to the context
    setDesertOrder((prevDer) => {
      const updatedDesert = [...prevDer.items];
      const exisitingDersertIndex = updatedDesert.findIndex(
        (dOrdered) => dOrdered.id === id
      );
      const exisitingDesertItem = updatedDesert[exisitingDersertIndex];

      if (exisitingDesertItem) {
        // if items alreadys exist in Cart
        const updateDesert = {
          ...exisitingDesertItem,
          quantity: exisitingDesertItem.quantity + 1,
        };
        updatedDesert[exisitingDersertIndex] = updateDesert;
      } else {
        // New Item in the Cart
        const itm = DUMMY_ITEMS.find((dOrdered) => dOrdered.id === id);
        // const toon2 = DUMMY_POPULAR.find((dOrdered) => dOrdered.id === id);
        if (itm) {
          updatedDesert.push({
            id: itm.id,
            title: itm.title,
            image: itm.image,
            style: itm.style,
            quantity: 1,
          });
        }
      }

      return {
        items: updatedDesert,
      };
    });
  };
  console.log(desertOrder);
  const HanldesDeletingCartoon = (id) => {
    // handles deleting cartoon to the context
    setDesertOrder((prevDer) => {
      const updatedDesert = [...prevDer.items];
      const exisitingDersertIndex = updatedDesert.findIndex(
        (dOrdered) => dOrdered.id === id
      );
      updatedDesert.splice(exisitingDersertIndex, 1);

      return {
        items: updatedDesert,
      };

      // const exisitingDesertItem = updatedDesert[exisitingDersertIndex];
    });
  };
  const HandleUpdateCartoon = (id, amount) => {
    setDesertOrder((prevDer) => {
      const updatedDesert = [...prevDer.items];
      const exisitingDersertIndex = updatedDesert.findIndex(
        (dOrdered) => dOrdered.id === id
      );
      const updateDesert = {
        ...updatedDesert[exisitingDersertIndex],
      };
      updateDesert.quantity += amount;
      if (updateDesert.quantity <= 0) {
        updatedDesert.splice(exisitingDersertIndex, 1);
      } else {
        updatedDesert[exisitingDersertIndex] = updateDesert;
      }

      return {
        items: updatedDesert,
      };
    });
  };
  const desert = {
    items: desertOrder.items,
    addDesert: HandlesAddingCartoon,
    reduceDesert: HanldesDeletingCartoon,
    updateCartoon: HandleUpdateCartoon,
  };

  return <CartContext.Provider value={desert}>{children}</CartContext.Provider>;
}

DesertContextProvider.propTypes = {
  children: PropTypes.node,
};
