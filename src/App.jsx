import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="mt-20 font-poppins min-h-[calc(100vh-80px)] flex flex-col">
      <Navbar></Navbar>
      <div className="flex flex-grow">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
