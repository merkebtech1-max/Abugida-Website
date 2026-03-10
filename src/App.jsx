import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import About from "./page/about";
import Home from "./page/home";
import Menu from "./page/menu";
import Contact from "./page/contact";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#0a1a3b" : "#ffffff";
  }, [darkMode]);

  return (
    <div className={darkMode ? "bg-black text-white" : "bg-white text-black"}>
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer darkMode={darkMode} />
      </Router>
    </div>
  );
}
