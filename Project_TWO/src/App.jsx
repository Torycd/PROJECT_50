import Cart from "./Components/Cart";
import Items from "./Components/Items";
import { DesertProvider } from "./Store/DesertProvider";

const App = () => {
  return (
    <DesertProvider>
      <div className="bg-rose-50 h-full w-full py-[10px] px-[20px] sm:py-[50px] sm:px-[150px] font-Red">
        <div className="flex flex-col sm:flex-row justify-between sm:gap-5">
          <div className="sm:w-[70%]">
            <h2 className="text-[32px] font-bold mb-[50px]">Desserts</h2>
            <Items />
          </div>
          <div className="sm:w-[30%] ">
            <Cart />
          </div>
        </div>
      </div>
    </DesertProvider>
  );
};

export default App;
