import s from "./ServiceHero.module.css";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const ServiceHero = ({ children, li1, li2, li3, li4, li5, btnUrl }) => {
  return (
    <div className={s.services}>
      <h2 className={s.title}>{children}</h2>
      <ul className={s.list}>
        <li className={s.item}>{li1}</li>
        <li className={s.item}>{li2}</li>
        <li className={s.item}>{li3}</li>
        <li className={s.item}>{li4}</li>
        <li className={s.item}>{li5}</li>
      </ul>
      <Link to={btnUrl} className={s.btn}>
        Обрати
      </Link>
    </div>
  );
};

export default ServiceHero;
