import s from "./Nav.module.scss";
import { NavLink } from "react-router-dom";
function Nav(props) {
  return (
    <ul className={s.nav}>
      <li className={s.navItem}>
        <NavLink className={s.navlink} to={"/"}>
          Квадроциклы
        </NavLink>
      </li>
      <li>
        <NavLink className={s.navlink} to={"/"}>
          Катера
        </NavLink>
      </li>
      <li>
        <NavLink className={s.navlink} to={"/"}>
          Гидроциклы
        </NavLink>
      </li>
      <li className={s.navItem}>
        <NavLink className={s.navlink} to={"/"}>
          Лодки
        </NavLink>
      </li>
      <li>
        <NavLink className={s.navlink} to={"/"}>
          Вездеходы
        </NavLink>
      </li>
      <li>
        <NavLink className={s.navlink} to={"/"}>
          Снегоходы
        </NavLink>
      </li>
      <li>
        <NavLink className={s.navlink} to={"/"}>
          Двигатели
        </NavLink>
      </li>
      <li>
        <NavLink className={s.navlink} to={"/"}>
          Запчасти
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
