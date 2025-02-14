import HomePage from "./Pages/HomePage";
import Navigation from "./Component/Navigation";
import Different from "./Pages/Different";
import Footer from "./Pages/Footer";

const App = () => {
  return (
    <div className="font-Serif w-screen overflow-hidden">
      <Navigation />
      <HomePage />
      <Different/>
      <Footer/>
    </div>
  );
};

export default App;
