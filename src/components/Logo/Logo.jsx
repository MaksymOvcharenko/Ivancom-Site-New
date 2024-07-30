import { Link } from "react-router-dom";
import logo from "./logo.png";

import s from "./Logo.module.css";
const Logo = () => {
  return (
    <div className={s.logo}>
      <Link to={"/"} className={s.logo}>
        <img src={logo} alt="logo" height={36} width={81} />
      </Link>
    </div>
  );
};

export default Logo;
