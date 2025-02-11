import HomePage from "./Pages/HomePage";
import Navigation from "./Component/Navigation";
import Different from "./Pages/Different";

const App = () => {
  return (
    <div className="font-Serif">
      <Navigation />
      <HomePage />
      <Different/>
    </div>
  );
};

export default App;
