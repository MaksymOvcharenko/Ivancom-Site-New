import { scaleDown as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaHome,
  FaQuestion,
  FaTruck,
} from "react-icons/fa";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import "./BurgerMenu.css";
import { useState, useRef, useEffect } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { PiBagSimpleDuotone } from "react-icons/pi";
import { IoBookOutline, IoChatboxEllipsesOutline } from "react-icons/io5";
import { MdContactPhone } from "react-icons/md";
import { RiDiscountPercentLine } from "react-icons/ri";
import { EU, PL, UA } from "country-flag-icons/react/1x1";
import Logo from "../Logo/Logo";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenUslugi, setIsOpenUslugi] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsOpenUslugi(false);
  };

  const handleStateChange = ({ isOpen }) => {
    setIsOpen(isOpen);
  };

  return (
    <Menu
      right
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      width={"280px"}
      customCrossIcon={<IoMdClose className="bm-cross-icon" />}
      crossButtonClassName={"bm-cross-icon"}
      isOpen={isOpen}
      onStateChange={handleStateChange}
      ref={menuRef}
    >
      <div className="burger-logo">
        <Logo />
      </div>
      <Link to="/" className="menu-item" onClick={handleLinkClick}>
        <FaHome size={"20px"} className="menu-icon" />
        Головна
      </Link>
      <span
        onClick={() => setIsOpenUslugi((prev) => !prev)}
        className="menu-item"
      >
        <FaTruck size={"20px"} className="menu-icon" />
        Послуги
        <IoIosArrowDown />
      </span>
      {isOpenUslugi && (
        <>
          <Link
            to="/services/ua-pl"
            className="submenu-item"
            onClick={handleLinkClick}
          >
            <div className="header-submenu">
              <UA className="flags" />
              <span>UA - EU</span>
              <IoIosArrowDown />
            </div>
            <ul className="submenu">
              <li>
                <Link to="/services/ua-pl/packages" onClick={handleLinkClick}>
                  Посилки
                </Link>
              </li>
              <li>
                <Link to="/services/ua-pl/medicines" onClick={handleLinkClick}>
                  Ліки
                </Link>
              </li>
              <li>
                <Link to="/services/ua-pl/animals" onClick={handleLinkClick}>
                  Тварини
                </Link>
              </li>
              <li>
                <Link to="/services/ua-pl/moving" onClick={handleLinkClick}>
                  Переїзди
                </Link>
              </li>
              <li>
                <Link to="/services/ua-pl/tires" onClick={handleLinkClick}>
                  Колеса та шини
                </Link>
              </li>
              <li>
                <Link to="/services/ua-pl/bikes" onClick={handleLinkClick}>
                  Велосипеди
                </Link>
              </li>
            </ul>
          </Link>
          <Link
            to="/services/pl-ua"
            className="submenu-item"
            onClick={handleLinkClick}
          >
            <div className="header-submenu">
              <EU className="flags" />
              <span>EU - UA</span>
              <IoIosArrowDown />
            </div>
            <ul className="submenu">
              <li>
                <Link to="/services/pl-ua/packages" onClick={handleLinkClick}>
                  Посилки
                </Link>
              </li>
              <li>
                <Link to="/services/pl-ua/medicines" onClick={handleLinkClick}>
                  Ліки
                </Link>
              </li>
              <li>
                <Link to="/services/pl-ua/animals" onClick={handleLinkClick}>
                  Тварини
                </Link>
              </li>
              <li>
                <Link to="/services/pl-ua/moving" onClick={handleLinkClick}>
                  Переїзди
                </Link>
              </li>
              <li>
                <Link to="/services/pl-ua/tires" onClick={handleLinkClick}>
                  Колеса та шини
                </Link>
              </li>
              <li>
                <Link to="/services/pl-ua/bikes" onClick={handleLinkClick}>
                  Велосипеди
                </Link>
              </li>
            </ul>
          </Link>
          <Link
            to="/services/pl-pl"
            className="submenu-item"
            onClick={handleLinkClick}
          >
            <div className="header-submenu">
              <PL className="flags" />
              <span>PL - PL</span>
              <IoIosArrowDown />
            </div>
            <ul className="submenu">
              <li>
                <Link to="/services/pl-pl/request" onClick={handleLinkClick}>
                  Звернутись за запитом
                </Link>
              </li>
            </ul>
          </Link>
        </>
      )}
      <Link to="/#schedule" className="menu-item" onClick={handleLinkClick}>
        <CiCalendarDate size={"20px"} className="menu-icon" />
        Розклад рейсів
      </Link>
      <Link to="/for-companies" className="menu-item" onClick={handleLinkClick}>
        <PiBagSimpleDuotone size={"20px"} className="menu-icon" />
        Для фірм
      </Link>
      <Link to="/about-us" className="menu-item" onClick={handleLinkClick}>
        <IoBookOutline size={"20px"} className="menu-icon" />
        Про Нас
      </Link>
      <Link to="/#faq" className="menu-item" onClick={handleLinkClick}>
        <FaQuestion size={"20px"} className="menu-icon" />
        Часті питання
      </Link>
      <Link to="/contacts" className="menu-item" onClick={handleLinkClick}>
        <MdContactPhone size={"20px"} className="menu-icon" />
        Контакти
      </Link>
      <Link to="/brandua" className="menu-item" onClick={handleLinkClick}>
        <UA className="menu-icon" height={"16px"} width={"20px"} />
        BrandUa
      </Link>
      <Link to="/promotions" className="menu-item" onClick={handleLinkClick}>
        <RiDiscountPercentLine size={"20px"} className="menu-icon" />
        Акції
      </Link>
      <div className="soc-links">
        <Link
          to="https://www.facebook.com/ivancom.eu/"
          className="soc-link"
          target="_blank"
        >
          <FaFacebook />
        </Link>
        <Link
          to="https://www.instagram.com/ivancom.poland/?igshid=NGVhN2U2NjQ0Yg%3D%3D"
          className="soc-link"
          target="_blank"
        >
          <FaInstagram />
        </Link>
        <Link
          to="https://www.tiktok.com/@ivancom.poland?_t=8iCTrsyAonB"
          className="soc-link"
          target="_blank"
        >
          <FaTiktok />
        </Link>
        <Link
          to="https://ru.linkedin.com/company/ivancom"
          className="soc-link"
          target="_blank"
        >
          <FaLinkedin />
        </Link>
      </div>
      <div className="chat-burger">
        <Link to="https://t.me/IvancomTownBot">
          <IoChatboxEllipsesOutline size={"48px"} />
        </Link>
      </div>
      <div className="policy-burger">
        <p className="policy-item">
          © Всі права захищені.
          <br /> NIP: 9452232009
          <br /> ivancom.eu
        </p>
      </div>
    </Menu>
  );
};

export default BurgerMenu;
