import s from "./Header.module.scss";
import NavActive from "../navActive/NavActive";
import Logo from "../logo/Logo";
import Map from "../map/Map";
import Profile from "../profile/Profile";
import Nav from "../nav/Nav";

function Header() {
  return (
    <div className={s.header}>
      <div className={s.headerTop}>
        <NavActive />
        <Logo />
        <Map />
        <Profile />
      </div>
      <Nav />
    </div>
  );
}
export default Header;
