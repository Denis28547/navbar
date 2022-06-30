import { Link } from "react-router-dom";

export default function Dropdown({ submenus }) {
  return (
    <ul>
      {submenus.map((submenu, index) => (
        <li key={index}>
          <Link to={submenu.path}>{submenu.title}</Link>
        </li>
      ))}
    </ul>
  );
}
