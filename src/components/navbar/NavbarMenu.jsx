/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";

import "./Navbar.css";

import logo from "/assets/green_logo.png";

export default function NavbarMenu({ drawer, setDrawer }) {
  const object = [
    {
      id: "#home",
      name: "Home",
    },
    {
      id: "#about",
      name: "About Us",
    },
    {
      id: "#features",
      name: "Features",
    },
    {
      id: "#prayerTimings",
      name: "Praying Timings",
    },
    {
      id: "#charity",
      name: "Charity",
    },
    {
      id: "#downloads",
      name: "Downloads",
    },
    {
      id: "#home",
      name: "Close",
    },
  ];
  const list = () => (
    <Box
      sx={{
        width: "321px",
        borderRadius: "50px 0 0 50px",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-between",
        alignItems: "center",
        backgroundImage: "url('/assets/drawer-back.png')",
        backgroundSize: "cover",
        height: "100%",
      }}
      role="presentation"
      onClick={() => setDrawer(false)}
      onKeyDown={() => setDrawer(false)}
    >
      <a href="#home"><img
        src={logo}
        alt="Logo"
        style={{ margin: "40px 0px 60px 0px", width: "80px" }}
      /></a>
      <List
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
        }}
      >
        {object.map((text, index) => (
          <>
            <ListItem
              key={text.name}
              disablePadding
              sx={{ flex: text === "Close" && 1 }}
              className="listDivider"
            >
              <ListItemButton
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                {/* <ListItemText
                  primary={text.name}
                  sx={{ textAlign: "center", padding: 0, margin: 0 }}
                /> */}
                <a className="sideBar" href={text.id}>
                  {text.name}
                </a>
              </ListItemButton>
            </ListItem>
            <ListItem
              key={index.id}
              disablePadding
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1rem",
              }}
              className="listDivider"
            >
              <Divider
                sx={{
                  height: "0.1em",
                  width: "2em",
                  background: "#000000",
                  border: "none",
                  borderRadius: "10px",
                }}
              />
            </ListItem>
          </>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <SwipeableDrawer
        anchor={"right"}
        open={drawer}
        onClose={() => setDrawer(false)}
        onOpen={() => setDrawer(true)}
        sx={{ ".MuiPaper-root": { borderRadius: "50px 0 0 50px" } }}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}
