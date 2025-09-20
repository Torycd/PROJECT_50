import Card from "./Card";
import { DUMMY_ITEMS } from "../Store/dummy-item";

const Items = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-8">
      {DUMMY_ITEMS.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Items;
