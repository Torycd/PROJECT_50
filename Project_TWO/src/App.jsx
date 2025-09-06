import Cart from "./Components/Cart";
import Items from "./Components/Items";
import { DesertProvider } from "./Store/DesertProvider";

const App = () => {
  return (
    <DesertProvider>
      <div className="bg-rose-50 h-full w-full py-[50px] px-[150px] font-Red">
        <div className="flex justify-between gap-5">
          <div className="w-[70%]">
            <h2 className="text-[32px] font-bold mb-[50px]">Desserts</h2>
            <Items />
          </div>
          <div className="w-[30%] ">
            <Cart />
          </div>
        </div>
      </div>
    </DesertProvider>
  );
};

export default App;
