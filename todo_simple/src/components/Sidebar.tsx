import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/dashboard"
            style={({ isActive }) => ({
              color: isActive ? "red" : "blue",
            })}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-tasks"
            style={({ isActive }) => ({
              color: isActive ? "red" : "blue",
            })}
          >
            My Tasks
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
