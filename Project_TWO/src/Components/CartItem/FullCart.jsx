import { useState } from "react";
import Modal from "react-modal";

import { usePost } from "../../Store/DesertProvider";

import CartItem from "./CartItem";
import svg from "../../assets/images/icon-carbon-neutral.svg";
import svg1 from "../../assets/images/icon-order-confirmed.svg";
import ModalCart from "./ModalCart";
import Button from "../Button";

Modal.setAppElement("#root");

function FullCart() {
  const { deserts, setDesertSelected } = usePost();
  const [showModal, setShowModal] = useState(false);
  const totalCost = deserts.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const handleConfirm = () => {
    setShowModal(true);
  };

  const handleNewCart = () => {
    setDesertSelected([]);
  };
 
  return (
    <div className="flex flex-col space-y-4 relative">
      <div>
        {deserts.map((desert) => (
          <CartItem key={desert.id} desert={desert} />
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <p className="text-[12px] font-semibold text-gray-700">Order Total</p>
        <span className="text-[20px] font-bold">${totalCost.toFixed(2)}</span>
      </div>
      <div className="py-3 bg-orange-100 rounded-full text-center flex justify-center space-x-2">
        <span>
          <img src={svg} alt="carbon-icon" />
        </span>
        <p>This is a carbon neutral delivery</p>
      </div>
      <Button onClick={handleConfirm}>Confirm Order</Button>

      {/* React Modal */}
      <Modal
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-md mx-auto mt-20 outline-none"
        overlayClassName="fixed inset-0 bg-black/60  flex items-center justify-center"
      >
        <span>
          <img src={svg1} alt="check-icon" />
        </span>
        <h2 className="text-[24px] font-bold">Order Confirmed</h2>
        <p className="text-gray-700 mb-4">We hope you enjoy your food</p>

        <div className="overflow-y-auto bg-orange-100 p-4 rounded-md mb-5">
          <div className="space-y-4 mb-5">
            {deserts.map((desert) => (
              <ModalCart key={desert.id} desert={desert} />
            ))}
          </div>

          <div className="flex justify-between">
            <span>Order Total</span>
            <span className="font-bold text-[24px]">
              ${totalCost.toFixed(2)}
            </span>
          </div>
        </div>
        <Button onClick={handleNewCart}>Start New Cart</Button>
      </Modal>
    </div>
  );
}

export default FullCart;
