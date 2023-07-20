import "./assets/css/main.css";
import SideBar from "./components/SideBar/SideBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="home-container">
          <SideBar />
          <div className="w-full">
            <Header />
            <Routes>
              <Route path="*" element="Página no encontrada" />
              <Route path="/inputs" element={<Home />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
