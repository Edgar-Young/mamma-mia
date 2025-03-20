import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Loginpage from "./components/Loginpage/Loginpage";
import Navbar from "./components/Navbar/Navbar";
import Registerpage from "./components/Registerpage/Registerpage";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Registerpage />
      {/* <Loginpage /> */}
      <Footer />
    </>
  );
};

export default App;
