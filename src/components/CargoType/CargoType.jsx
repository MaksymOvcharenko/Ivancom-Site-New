/* eslint-disable react/jsx-no-undef */

import { Link } from "react-router-dom";
import s from "./CargoType.module.css";

const CargoType = ({ images }) => {
  return (
    <>
      <div className={s.section}>
        <h2 className={s.titlemain}>Обери типи відправлення:</h2>
        <ul className={s.cont}>
          {images.map((e, id) => {
            return (
              <li key={id}>
                <Link to={e.url}>
                  <div className={s.item}>
                    <img src={e.src} alt={e.title} className={s.img} />
                    <h4 className={s.title}>{e.title}</h4>
                    <div className={s.btn}>
                      <p className={s.desc}>Читай більше</p>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default CargoType;
