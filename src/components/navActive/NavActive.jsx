import s from "./NavActive.module.scss";
import { NavLink } from "react-router-dom";
function NavActive(props) {
  return (
    <ul className={s.nav}>
      <li className={s.navItem}>
        <NavLink className={s.navlink} to={"/"}>
          Магазины
        </NavLink>
      </li>
      <li>
        <NavLink className={s.navlink} to={"/"}>
          Акции
        </NavLink>
      </li>
      <li>
        <NavLink className={s.navlink} to={"/"}>
          Доставка и оплата
        </NavLink>
      </li>
    </ul>
  );
}

export default NavActive;
