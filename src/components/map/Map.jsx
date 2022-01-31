import { NavLink } from "react-router-dom";
import s from "./Map.module.scss";
import mapPic from "../../assets/images/nav/map.svg";

function Map() {
  return (
    <div className={s.map}>
      <NavLink className={s.mapLink} to={"/"}>
        <img className={s.mapPic} src={mapPic} alt="map" />
        <span className={s.mapSpan}>Москва, ул. Науки 25</span>
      </NavLink>
    </div>
  );
}

export default Map;
