import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul>
          {menuItems.map((menu, index) => {
            return <MenuItems items={menu} key={index} />;
          })}
        </ul>
      </nav>
    </>
  );
}
