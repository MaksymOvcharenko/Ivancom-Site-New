import { scaleDown as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import "./BurgerMenu.css";
import { useState } from "react";

const BurgerMenu = () => {
  const [isOpenUa, setIsOpenUa] = useState(false);
  const [isOpenPl, setIsOpenPl] = useState(false);
  const [isOpenPltoPl, setIsOpenPltoPl] = useState(false);

  return (
    <Menu
      right
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      width={"240px"}
      customCrossIcon={<IoMdClose className="bm-cross-icon" />}
      crossButtonClassName={"bm-cross-icon"}
    >
      <Link to="/" className="menu-item">
        Головна
      </Link>
      <Link
        to="/services/ua-pl"
        className="menu-item"
        id="open"
        onClick={() => {
          setIsOpenUa((prev) => !prev);
          setIsOpenPl(false);
          setIsOpenPltoPl(false);
        }}
      >
        <div className="header-submenu">
          <span>UA-PL</span>
          <IoIosArrowDown size={"24px"} />
        </div>
        {isOpenUa && (
          <ul className="submenu">
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
        )}
      </Link>
      <Link
        to="/services/pl-ua"
        className="menu-item"
        onClick={() => {
          setIsOpenUa(false);
          setIsOpenPl((prev) => !prev);
          setIsOpenPltoPl(false);
        }}
      >
        <div className="header-submenu">
          <span>PL-UA</span>
          <IoIosArrowDown />
        </div>
        {isOpenPl && (
          <ul className="submenu">
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
        )}
      </Link>
      <Link
        to="/services/pl-pl"
        className="menu-item"
        onClick={() => {
          setIsOpenUa(false);
          setIsOpenPl(false);
          setIsOpenPltoPl((prev) => !prev);
        }}
      >
        <div className="header-submenu">
          <span> PL-PL</span>
          <IoIosArrowDown />
        </div>
        {isOpenPltoPl && (
          <ul className="submenu">
            <li>
              <Link to="/services/pl-pl/request">Звернутись за запитом</Link>
            </li>
          </ul>
        )}
      </Link>
      <Link to="/schedule" className="menu-item">
        Розклад рейсів
      </Link>
      <Link to="/for-companies" className="menu-item">
        Для фірм
      </Link>
      <Link to="/about-us" className="menu-item">
        Про Нас
      </Link>
      <Link to="/faq" className="menu-item">
        Часті питання
      </Link>
      <Link to="/contacts" className="menu-item">
        Контакти
      </Link>
      <Link to="/brandua" className="menu-item">
        BrandUa
      </Link>
      <Link to="/promotions" className="menu-item">
        Акції
      </Link>
      <div className="soc-links">
        <Link to="/" className="soc-link">
          <FaFacebook />
        </Link>
        <Link to="/" className="soc-link">
          <FaInstagram />
        </Link>
        <Link to="/" className="soc-link">
          <FaTiktok />
        </Link>
        <Link to="/" className="soc-link">
          <FaLinkedin />
        </Link>
      </div>
    </Menu>
  );
};

export default BurgerMenu;
