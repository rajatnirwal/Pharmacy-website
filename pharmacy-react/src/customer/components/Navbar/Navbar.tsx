<<<<<<< HEAD
=======
import React, { useEffect, useState } from "react";
>>>>>>> abhi_branch
import {
  Avatar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
<<<<<<< HEAD
import React from "react";
=======
>>>>>>> abhi_branch
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  AddShoppingCart,
  FavoriteBorder,
  Storefront,
} from "@mui/icons-material";
<<<<<<< HEAD
import { Link } from "react-router-dom";

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
=======
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
>>>>>>> abhi_branch

  const navItems = [
    { label: "Medicines", path: "/medicines" },
    { label: "Lab Tests", path: "/lab-tests" },
    { label: "Consult Doctor", path: "/consult-doctor" },
    { label: "Value store", path: "/value-store" },
  ];

  return (
    <>
      <Box
<<<<<<< HEAD
        className="fixed top-0 left-0 w-full z-50 bg-primary-color shadow-sm"
        sx={{
          borderBottom: "1px solid #14532d", // Slightly darker separator (optional)
        }}
      >
        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px]">
          {/* Left: Logo + Nav Links */}
=======
        className="fixed top-0 left-0 w-full z-50 shadow-sm"
        sx={{
          backgroundColor: "#4caf50",
          borderBottom: "1px solid #388e3c",
        }}
      >
        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px]">
>>>>>>> abhi_branch
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

<<<<<<< HEAD
          {/* Right: Icons + Profile + Cart */}
=======
>>>>>>> abhi_branch
          <div className="flex items-center gap-3 lg:gap-6">
            <IconButton sx={{ color: "white" }}>
              <SearchIcon />
            </IconButton>

<<<<<<< HEAD
            <Button className="flex items-center gap-2 capitalize text-white">
              <Avatar sx={{ width: 29, height: 29 }} src="" />
              <h1 className="font-semibold hidden lg:block">Rajat Nirwal</h1>
            </Button>
=======
            {/* ✅ Link to /login triggers modal via URL */}
            <Link
              to="/login"
              className="flex items-center gap-2 px-2 py-1 rounded hover:bg-white/10 transition text-white"
              style={{ textDecoration: "none" }}
            >
              <Avatar sx={{ width: 29, height: 29 }} />
              <h1 className="hidden lg:block">Login</h1>
            </Link>
>>>>>>> abhi_branch

            <IconButton sx={{ color: "white" }}>
              <FavoriteBorder sx={{ fontSize: 29 }} />
            </IconButton>

<<<<<<< HEAD
            <IconButton sx={{ color: "white" }}>
              <AddShoppingCart sx={{ fontSize: 29 }} />
            </IconButton>
=======
            <Link to="/cart">
            <IconButton sx={{ color: "white" }}>
              <AddShoppingCart sx={{ fontSize: 29 }} />
            </IconButton>
            </Link>
>>>>>>> abhi_branch

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
<<<<<<< HEAD
=======

      {/* ✅ Modal based on route */}
      <LoginModal open={showModal} onClose={() => navigate("/")} />
>>>>>>> abhi_branch
    </>
  );
};

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> abhi_branch
