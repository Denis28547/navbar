import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function MenuItems({ items }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <li>
      {items.submenu ? (
        <>
          <button
            className="hoverButton"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            {items.title}
          </button>
          {isShown && <Dropdown submenus={items.submenu} />}
        </>
      ) : (
        <Link to={items.path}>{items.title}</Link>
      )}
    </li>
  );
}
