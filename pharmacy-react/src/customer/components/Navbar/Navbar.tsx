import {
  Avatar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  AddShoppingCart,
  FavoriteBorder,
  Storefront,
} from "@mui/icons-material";
import { Link } from "react-router-dom"; // ✅ For navigation

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

  const navItems = [
    { label: "Medicines", path: "/medicines" },
    { label: "Lab Tests", path: "/lab-tests" },
    { label: "Consult Doctor", path: "/consult-doctor" },
    { label: "Value store", path: "/value-store" },
  ];

  return (
    <>
      <Box
        className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm"
        sx={{ borderBottom: "1px solid #e0e0e0" }}
      >
        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px]">
          {/* Left: Logo + Nav Links */}
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              {!isLarge && (
                <IconButton>
                  <MenuIcon />
                </IconButton>
              )}
              <h1 className="cursor-pointer text-lg md:text-2xl text-green-600 font-bold">
                <Link to="/">Pharma Cure</Link>
              </h1>
            </div>
            <ul className="hidden md:flex items-center font-medium text-gray-800">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="h-[70px] px-4 flex items-center hover:text-green-600 hover:border-b-2 border-green-600 transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Icons + Profile + Cart */}
          <div className="flex items-center gap-3 lg:gap-6">
            <IconButton>
              <SearchIcon />
            </IconButton>

            {/* Avatar/Login */}
            <Button className="flex items-center gap-2 capitalize">
              <Avatar sx={{ width: 29, height: 29 }} src="" />
              <h1 className="font-semibold hidden lg:block">Rajat Nirwal</h1>
            </Button>

            {/* Wishlist Icon */}
            <IconButton>
              <FavoriteBorder sx={{ fontSize: 29 }} />
            </IconButton>

            {/* Cart Icon */}
            <IconButton>
              <AddShoppingCart sx={{ fontSize: 29, color: "#333" }} />
            </IconButton>

            {/* Become Seller Button */}
            {isLarge && (
              <Button startIcon={<Storefront />} variant="outlined">
                Become Seller
              </Button>
            )}
          </div>
        </div>
      </Box>
    </>
  );
};

export default Navbar;
