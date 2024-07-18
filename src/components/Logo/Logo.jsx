import { Link } from "react-router-dom";
import logo from "./logo.png";
const Logo = () => {
  return (
    <div>
      <Link to={"/"}>
        <img src={logo} alt="logo" height={48} />
      </Link>
    </div>
  );
};

export default Logo;
