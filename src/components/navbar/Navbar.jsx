import { useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";

import "./Navbar.css";

import NavbarMenu from "./NavbarMenu";
import logo from "/assets/green_logo.png";

export default function Navbar() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down(900));

  const [drawer, setDrawer] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }} // Start off-screen (above)
      animate={{ y: 0, opacity: 1 }} // Slide down to position
      exit={{ y: -100, opacity: 0 }} // Slide up when unmounting
      transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
    >
      <div className="nav-img">
        <a href="#home"><img src={logo} alt="Logo" /></a>
      </div>

      {!isSmall ? (
        <>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#features">Features </a>
            </li>
            <li>
              <a href="#prayerTimings">Prayer Timings</a>
            </li>
            <li>
              <a href="#charity">Charity</a>
            </li>
            <li>
              <a href="#downloads">Downloads</a>
            </li>
          </ul>
          <button
            onClick={() =>
              document
                .getElementById("charity")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Give Charity
          </button>
        </>
      ) : (
        <div className="menu">
          <div onClick={() => setDrawer(true)}>
            <MenuIcon />
          </div>
          <NavbarMenu drawer={drawer} setDrawer={setDrawer} />
        </div>
      )}
    </motion.nav>
  );
}
