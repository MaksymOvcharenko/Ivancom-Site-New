// /src/components/Header/Header.jsx

import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import Logo from "../Logo/Logo";
// import MobileMenu from "./MobileMenu";
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>

      <nav className={styles.nav}>
        <ul className={styles.socLink}>
          <li className={styles.socLinkItem}>
            <Link to="/" className={styles.linksoc}>
              <FaFacebook className="react-icons" size={24} />
            </Link>
          </li>
          <li className={styles.socLinkItem}>
            <Link to="/" className={styles.linksoc}>
              <FaInstagram className="react-icons" size={24} />
            </Link>
          </li>
          <li className={styles.socLinkItem}>
            <Link to="/" className={styles.linksoc}>
              <FaTiktok className="react-icons" size={24} />
            </Link>
          </li>
          <li className={styles.socLinkItem}>
            <Link to="/" className={styles.linksoc}>
              <FaLinkedin className="react-icons" size={24} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
