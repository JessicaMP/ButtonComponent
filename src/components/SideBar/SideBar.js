import "./SideBar.css";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const NavLinkIsActive = "active";

  return (
    <div className="sidebar-container">
      <div>
        <NavLink to="/inputs" className="logo">
          <span className="color-red">Dev</span>challenges.io
        </NavLink>

        <ul>
          <li>
            <NavLink
              to="/colors"
              className={({ isActive }) => (isActive ? NavLinkIsActive : "")}
            >
              Colors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/typography"
              className={({ isActive }) => (isActive ? NavLinkIsActive : "")}
            >
              Typography
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/spaces"
              className={({ isActive }) => (isActive ? NavLinkIsActive : "")}
            >
              Spaces
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/buttons"
              className={({ isActive }) => (isActive ? NavLinkIsActive : "")}
            >
              Buttons
            </NavLink>
          </li>
          <li className="active">
            <NavLink
              to="/inputs"
              className={({ isActive }) => (isActive ? NavLinkIsActive : "")}
            >
              Inputs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/grid"
              className={({ isActive }) => (isActive ? NavLinkIsActive : "")}
            >
              Grid
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
