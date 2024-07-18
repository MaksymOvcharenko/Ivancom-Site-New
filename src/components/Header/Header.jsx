// /src/components/Header/Header.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";
import Logo from "../Logo/Logo";
// import MobileMenu from "./MobileMenu";
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      {/* <button
        onClick={toggleMobileMenu}
        className={styles.mobileMenuButton}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button> */}

      <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <Link to="/">Головна</Link>
          </li>
          <li className={styles.dropdown}>
            <Link className={styles.accordion}>Послуги</Link>
            <ul className={styles.submenu}>
              <li className={styles.dropdown}>
                <Link to="/services/ua-pl" className={styles.accordion}>
                  UA-PL
                </Link>
                <ul className={styles.subsubmenu}>
                  <li>
                    <Link to="/services/ua-pl/packages">Посилки</Link>
                  </li>
                  <li>
                    <Link to="/services/ua-pl/medicines">Ліки</Link>
                  </li>
                  <li>
                    <Link to="/services/ua-pl/animals">Тварини</Link>
                  </li>
                  <li>
                    <Link to="/services/ua-pl/moving">Переїзди</Link>
                  </li>
                  <li>
                    <Link to="/services/ua-pl/tires">Колеса та шини</Link>
                  </li>
                  <li>
                    <Link to="/services/ua-pl/bikes">Велосипеди</Link>
                  </li>
                </ul>
              </li>
              <li className={styles.dropdown}>
                <Link to="/services/pl-ua" className={styles.accordion}>
                  PL-UA
                </Link>
                <ul className={styles.subsubmenu}>
                  <li>
                    <Link to="/services/pl-ua/packages">Посилки</Link>
                  </li>
                  <li>
                    <Link to="/services/pl-ua/medicines">Ліки</Link>
                  </li>
                  <li>
                    <Link to="/services/pl-ua/animals">Тварини</Link>
                  </li>
                  <li>
                    <Link to="/services/pl-ua/moving">Переїзди</Link>
                  </li>
                  <li>
                    <Link to="/services/pl-ua/tires">Колеса та шини</Link>
                  </li>
                  <li>
                    <Link to="/services/pl-ua/bikes">Велосипеди</Link>
                  </li>
                </ul>
              </li>
              <li className={styles.dropdown}>
                <Link to="/services/pl-pl" className={styles.accordion}>
                  PL-PL
                </Link>
                <ul className={styles.subsubmenu}>
                  <li>
                    <Link to="/services/pl-pl/request">
                      Звернутись за запитом
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
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
        <ul className={styles.socLink}>
          <li className={styles.socLinkItem}>
            <Link to="/">
              <FaFacebook className="react-icons" />
            </Link>
          </li>
          <li className={styles.socLinkItem}>
            <Link to="/">
              <FaInstagram className="react-icons" />
            </Link>
          </li>
          <li className={styles.socLinkItem}>
            <Link to="/">
              <FaTiktok className="react-icons" />
            </Link>
          </li>
          <li className={styles.socLinkItem}>
            <Link to="/">
              <FaLinkedin className="react-icons" />
            </Link>
          </li>
        </ul>
      </nav>
      {isMobileMenuOpen && <MobileMenu onCloses={closeMobileMenu} />}
    </header>
  );
}

export default Header;
