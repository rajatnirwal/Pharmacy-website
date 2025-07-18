import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import Navbar from "./customer/components/Navbar/Navbar";
import Footer from "./customer/components/Footer/Footer"; // ✅ Import Footer
import customeTheme from "./Theme/customTheme";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={customeTheme}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Home />
          </main>
          <Footer /> {/* ✅ Always visible at bottom */}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
