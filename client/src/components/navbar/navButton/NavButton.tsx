import { NavLink } from "react-router-dom";
import { ReactNode } from "react";

import style from "./navButton.module.css";

type Props = {
  to: string;
  children: ReactNode;
};

const NavButton = ({ to, children }: Props) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? style.navButton_active : style.navButton
      }
      to={to}
      end
    >
      {children}
    </NavLink>
  );
};

export default NavButton;
