import { NavLink } from "react-router-dom";

import style from "./styles/navbar.module.css";

const MainNavbar = () => {
  return (
    <nav className={style.navbar}>
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
    </nav>
  );
};

export default MainNavbar;
