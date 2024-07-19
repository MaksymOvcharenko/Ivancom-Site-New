import { scaleDown as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import "./BurgerMenu.css";

const BurgerMenu = () => {
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
      <Link to="/services/ua-pl" className="menu-item" id="open">
        UA-PL
        <ul className="menu-item submenu">
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
      </Link>
      <Link to="/services/pl-ua" className="menu-item">
        PL-UA
      </Link>
      <Link to="/services/pl-pl" className="menu-item">
        PL-PL
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
