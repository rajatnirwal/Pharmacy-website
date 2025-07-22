import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import Navbar from "./customer/components/Navbar/Navbar";
<<<<<<< HEAD
import Footer from "./customer/components/Footer/Footer"; // ✅ Import Footer
import customeTheme from "./Theme/customTheme";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router } from "react-router-dom";
=======
import Footer from "./customer/components/Footer/Footer";
import customeTheme from "./Theme/customTheme";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Medicines from "./pages/Medicines/Medicines";
import Cart from "./pages/Cart/Cart";
>>>>>>> abhi_branch

function App() {
  return (
    <ThemeProvider theme={customeTheme}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
<<<<<<< HEAD
            <Home />
          </main>
          <Footer /> {/* ✅ Always visible at bottom */}
=======
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/medicines" element={<Medicines /> } />
              <Route path="/cart" element={<Cart /> } />
            </Routes>
          </main>
          <Footer />
>>>>>>> abhi_branch
        </div>
      </Router>
    </ThemeProvider>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> abhi_branch
