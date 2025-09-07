import { usePost } from "../../Store/DesertProvider";
import CartItem from "./CartItem";

function FullCart() {
  const { deserts } = usePost();
  const totalCost = deserts.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  console.log(totalCost);
  return (
    <div className="flex flex-col space-y-4">
      <div>
{deserts.map((desert) => (
        <CartItem key={desert.id} desert={desert} />
      ))}
      </div>
      
      <div className="flex justify-between mt-4">
        <p className="text-[12px] font-semibold text-gray-700">Order Total</p>
        <span className="text-[20px] font-bold">${totalCost.toFixed(2)}</span>
      </div>
      <div>
        <p>This is a carbon neutral delivery</p>
      </div>
      <button className="bg-orange-500 text-white rounded-full text-center py-3">
        Confirm Order
      </button>
    </div>
  );
}

export default FullCart;
