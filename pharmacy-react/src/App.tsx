import React from "react"
import "./App.css";
import { ThemeProvider } from "@mui/material";
import Navbar from "./customer/components/Navbar/Navbar";
import Footer from "./customer/components/Footer/Footer";
import customeTheme from "./Theme/customTheme";
import Home from "./pages/Home/Home";
import Medicines from "./pages/Medicines/Medicines";
import Cart from "./pages/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={customeTheme}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/medicines" element={<Medicines />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;