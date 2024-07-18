// /src/components/Header/MobileMenu.jsx

import { Link } from "react-router-dom";
import styles from "./MobileMenu.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTimes,
} from "react-icons/fa";

const MobileMenu = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.mobileMenu}>
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>
        <ul className={styles.mobileMenuLinks}>
          <li>
            <Link to="/">Головна</Link>
          </li>
          <li>
            <Link to="/services">Послуги</Link>
          </li>
          <li>
            <Link to="/schedule">Розклад рейсів</Link>
          </li>
          <li>
            <Link to="/for-companies">Для фірм</Link>
          </li>
          <li>
            <Link to="/about-us">Про Нас</Link>
          </li>
          <li>
            <Link to="/faq">Часті питання</Link>
          </li>
          <li>
            <Link to="/contacts">Контакти</Link>
          </li>
          <li>
            <Link to="/brandua">BrandUa</Link>
          </li>
          <li>
            <Link to="/promotions">Акції</Link>
          </li>
        </ul>
        <ul className={styles.mobileMenuSocLinks}>
          <li>
            <Link to="/">
              <FaFacebook className={styles.reactIcons} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaInstagram className={styles.reactIcons} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaTiktok className={styles.reactIcons} />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaLinkedin className={styles.reactIcons} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
