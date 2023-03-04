import { NavLink } from "react-router-dom";

import style from "./styles/navbar.module.css";
import { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MainNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "#2196f3" }}
    >
      <List sx={{ height: "100vh", width: 240 }}>
        <ListItem>
          <img src="/logo.svg" alt="logo" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.navlink_active : style.navlink
              }
              to="/"
            >
              My Profile
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.navlink_active : style.navlink
              }
              to="/my-clan/"
            >
              My Clan
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.navlink_active : style.navlink
              }
              to="/clans"
            >
              Clans
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.navlink_active : style.navlink
              }
              to="/profiles"
            >
              Profiles
            </NavLink>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar sx={{ padding: 1 }}>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "block", sm: "none" },
              height: "fit",
            }}
          >
            <img src="/logo.svg" alt="logo" />
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              },
            }}
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? style.navlink_active : style.navlink
              }
              to="/"
            >
              My Profile
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.navlink_active : style.navlink
              }
              to="/my-clan/"
            >
              My Clan
            </NavLink>
            <img src="/logo.svg" alt="logo" />
            <NavLink
              className={({ isActive }) =>
                isActive ? style.navlink_active : style.navlink
              }
              to="/clans"
            >
              Clans
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? style.navlink_active : style.navlink
              }
              to="/profiles"
            >
              Profiles
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );

  // return (
  //   <nav className={style.navbar}>
  //     <NavLink
  //       className={({ isActive }) =>
  //         isActive ? style.navlink_active : style.navlink
  //       }
  //       to="/"
  //     >
  //       My Profile
  //     </NavLink>
  //     <NavLink
  //       className={({ isActive }) =>
  //         isActive ? style.navlink_active : style.navlink
  //       }
  //       to="/my-clan/"
  //     >
  //       My Clan
  //     </NavLink>
  //     <img src="/logo.svg" alt="logo" />
  //     <NavLink
  //       className={({ isActive }) =>
  //         isActive ? style.navlink_active : style.navlink
  //       }
  //       to="/clans"
  //     >
  //       Clans
  //     </NavLink>
  //     <NavLink
  //       className={({ isActive }) =>
  //         isActive ? style.navlink_active : style.navlink
  //       }
  //       to="/profiles"
  //     >
  //       Profiles
  //     </NavLink>
  //   </nav>
  // );
};

export default MainNavbar;
