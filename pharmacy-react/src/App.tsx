import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import Navbar from "./customer/components/Navbar/Navbar";
import Footer from "./customer/components/Footer/Footer";
import customeTheme from "./Theme/customTheme";
import Home from "./pages/Home/Home";
import Medicines from "./pages/Medicines/Medicines";
import Cart from "./pages/Cart/Cart";
import LabTests from "./pages/LabTests/LabTests"; // ✅ <-- Add this line
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConsultDoctor from "./pages/ConsultDoctor/ConsultDoctor";
import ValueStore from "./pages/ValueStore/ValueStore";
import Product from "./pages/Product/Product";

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
              <Route path="/lab-tests" element={<LabTests />} />
              <Route path="/consult-doctor" element={<ConsultDoctor />} />
              {/* ✅ New Route */}
              <Route path="/value-store" element={<ValueStore />} />
              <Route path="/value-store/:productId" element={<Product />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
