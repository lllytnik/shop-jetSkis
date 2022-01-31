import s from "./Logo.module.scss";
import logoPic from "../../assets/images/logo/logo.svg";

function Logo() {
  return (
    <div className={s.logo}>
      <img src={logoPic} alt="logo" />
    </div>
  );
}

export default Logo;
