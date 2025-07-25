import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { AddShoppingCart, FavoriteBorder, Storefront } from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginModal from "../../../pages/Login/Login";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const navigate = useNavigate();
  const location = useLocation();
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    setShowModal(location.pathname === "/login");
  }, [location]);

  const navItems = [
    { label: "Medicines", path: "/medicines" },
    { label: "Lab Tests", path: "/lab-tests" },
    { label: "Consult Doctor", path: "/consult-doctor" },
    { label: "Value Store", path: "/value-store" },
  ];

  return (
    <>
      <Box
        className="fixed top-0 left-0 w-full z-50 shadow-sm"
        sx={{
          backgroundColor: "#4caf50",
          borderBottom: "1px solid #388e3c",
        }}
      >
        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px]">
          {/* Left: Logo and Navigation */}
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              {!isLarge && (
                <IconButton sx={{ color: "white" }}>
                  <MenuIcon />
                </IconButton>
              )}
              <h1 className="cursor-pointer text-lg md:text-2xl text-white font-bold">
                <Link to="/">Pharma Cure</Link>
              </h1>
            </div>

            <ul className="hidden md:flex items-center font-medium text-white">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="h-[70px] px-4 flex items-center hover:text-yellow-200 hover:border-b-2 border-yellow-200 transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Search, Profile, Cart, etc */}
          <div className="flex items-center gap-3 lg:gap-6">
            <IconButton sx={{ color: "white" }}>
              <SearchIcon />
            </IconButton>



            {/* Login opens modal */}
            <Link
              to="/login"
              className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/10 transition text-white"
              style={{ textDecoration: "none" }}
            >
              <Avatar sx={{ width: 29, height: 29 }} />
              <h1 className="hidden lg:block">Login</h1>
            </Link>

            <IconButton sx={{ color: "white" }}>
              <FavoriteBorder sx={{ fontSize: 29 }} />
            </IconButton>

            <Link to="/cart">
              <IconButton sx={{ color: "white" }}>
                <AddShoppingCart sx={{ fontSize: 29 }} />
              </IconButton>
            </Link>

            {isLarge && (
              <Button
                startIcon={<Storefront />}
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "white",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                    borderColor: "white",
                  },
                }}
              >
                Become Seller
              </Button>
            )}
          </div>
        </div>
      </Box>

      {/* Modal opens only when route is "/login" */}
      <LoginModal open={showModal} onClose={() => navigate("/")} />
    </>
  );
};

export default Navbar;