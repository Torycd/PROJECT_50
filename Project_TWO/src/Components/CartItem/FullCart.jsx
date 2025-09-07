import { usePost } from "../../Store/DesertProvider";
import CartItem from "./CartItem";

function FullCart() {
  const { deserts } = usePost();
  return (
    <div>
      {deserts.map((desert) => (
        <CartItem key={desert.id} desert={desert} />
      ))}
    </div>
  );
}

export default FullCart;

