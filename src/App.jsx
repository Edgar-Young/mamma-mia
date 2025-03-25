import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Loginpage from "./components/Loginpage/Loginpage";
import Navbar from "./components/Navbar/Navbar";
import Registerpage from "./components/Registerpage/Registerpage";
import Cart from "./components/Cart-pizza/Cart";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      {/* <Registerpage /> */}
      {/* <Loginpage /> */}
      <Cart />
      <Footer />
    </>
  );
};

export default App;
