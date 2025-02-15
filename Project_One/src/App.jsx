import HomePage from "./Pages/HomePage";
import Navigation from "./Component/Navigation";
import Different from "./Pages/Different";
import Footer from "./Pages/Footer";

const App = () => {
  return (
    <div className="font-Serif max-w-[100vw] overflow-hidden">
      <Navigation />
      <HomePage />
      <Different/>
      <Footer/>
    </div>
  );
};

export default App;
