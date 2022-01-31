import { NavLink } from "react-router-dom";
import s from "./Profile.module.scss";

import heartPic from "../../assets/images/nav/heart.svg";
import menPic from "../../assets/images/nav/men.svg";
import basketPic from "../../assets/images/nav/basket.svg";

function Profile() {
  return (
    <div className={s.profile}>
      <ul className={s.profileList}>
        <li>
          <NavLink className={s.profileLink} to={"/"}>
            <img className={s.profileImg} src={heartPic} alt="like" />
          </NavLink>
        </li>
        <li>
          <NavLink className={s.profileLink} to={"/"}>
            <img className={s.profileImg} src={menPic} alt="profile" />
          </NavLink>
        </li>
        <li>
          <NavLink className={s.profileLink} to={"/"}>
            <img className={s.profileImg} src={basketPic} alt="basket" />
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
