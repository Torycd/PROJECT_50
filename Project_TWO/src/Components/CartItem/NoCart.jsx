import img from "../../assets/images/illustration-empty-cart.svg";

const NoCart = () => {
  return (
    <div className="space-y-[24px]">
      <div className="flex justify-center">
        <img src={img} alt="cake-empty" />
      </div>
      <h3 className="text-gray-400 font-semibold text-center">
        Your added items will appear here
      </h3>
    </div>
  );
};

export default NoCart;
