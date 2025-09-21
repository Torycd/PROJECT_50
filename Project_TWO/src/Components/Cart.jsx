import { usePost } from "../Store/DesertProvider";

import NoCart from "./CartItem/NoCart";
import FullCart from "./CartItem/FullCart";

const Cart = () => {
  const { deserts } = usePost();
  const totalDeserts = deserts.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <div className="p-7 bg-white w-full rounded-md shadow-md">
      {totalDeserts > 0 && (
        <>
          <h2 className="text-[24px] font-bold text-orange-500">
            {`Your Cart (${totalDeserts})`}
          </h2>
          <FullCart />
        </>
      )}
      {totalDeserts == 0 && (
        <>
          <h2 className="text-[24px] font-bold text-orange-500">
            Your Cart (0)
          </h2>
          <NoCart />
        </>
      )}
    </div>
  );
};

export default Cart;
