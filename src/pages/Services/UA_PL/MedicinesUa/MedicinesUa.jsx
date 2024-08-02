/* eslint-disable react/no-unescaped-entities */
// import s from "../MedicinesUa/MedicinesUa.module.css";
import { Link } from "react-router-dom";
import { testUrl } from "../url";
import FormMedicinesUA from "./FormMedicinesUA/FormMedicinesUA";
import s from "./MedicinesUa.module.css";
import { useRef } from "react";
const MedicinesUa = () => {
  const formRef = useRef();
  const handleScroll = () => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={s.header}>
      <div className={s.home}>
        <h1 className={s.title}>
          Ліки <br />з України до Європи
        </h1>

        <div className={s.iconplace}>
          {/* <IoIosArrowDown
                  className={s.icon}
                  size={48}
                  onClick={scrollToSection}
                /> */}
        </div>
      </div>
      <div className={s.main}>
        <h2 className={s.maintitle}>Будь здоровим, де б ти не знаходився!</h2>
        <p className={s.maindesc}>
          ми відправимо твої ліки з України в будь-яку точку світу:)
        </p>
        <ul className={s.mainlist}>
          <li className={s.mainitem}>
            <div className={s.itemcont}>
              <h4 className={s.itemtitle}>таблетки/свічки</h4>
              <p className={s.itemdescr}>1 упаковка</p>
              <ul className={s.itemlist}>
                <li className={s.item}>до 20 шт в уп. – 10 zł</li>
                <li className={s.item}>до 50 шт в уп. – 12 zł</li>
                <li className={s.item}>від 50 шт в уп. – 15 zł</li>
              </ul>
            </div>
            <Link className={s.itembtn} onClick={handleScroll}>
              Відправити
            </Link>
          </li>
          <li className={s.mainitem}>
            <div className={s.itemcont}>
              <h4 className={s.itemtitle}>рідини/мазі/порошки</h4>
              <p className={s.itemdescr}>1 упаковка</p>
              <ul className={s.itemlist}>
                <li className={s.item}>до 100 мл/мг/гр – 7 zł</li>
                <li className={s.item}>від 100 мл/мг/гр – 10 zł</li>
              </ul>
            </div>
            <Link className={s.itembtn} onClick={handleScroll}>
              Відправити
            </Link>
          </li>
          <li className={s.mainitem}>
            <div className={s.itemcont}>
              <h4 className={s.itemtitle}>БАДи/вітаміни</h4>
              <p className={s.itemdescr}>1 упаковка</p>
              <ul className={s.itemlist}>
                <li className={s.item}>до 100 шт – 10 zł</li>
                <li className={s.item}>від 100 шт – 20 zł</li>
                <li className={s.item}>до 1 кг – 10 zł</li>
                <li className={s.item}>від 1 кг – 20 zł</li>
              </ul>
            </div>
            <Link className={s.itembtn} onClick={handleScroll}>
              Відправити
            </Link>
          </li>
        </ul>
      </div>
      <section className={s.rules}>
        <h2 className={s.maintitle}>ВАЖЛИВО!</h2>
        <p className={s.maindesc}>
          *уважно ознайомся з текстом нижче ДО відправлення. Так пересилка буде
          максимально комфортною:)
        </p>
        <div className={s.rulescont}>
          <ul className={s.ruleslist}>
            <li className={s.rulesitem}>
              • Ми відправляємо ліки{" "}
              <span>
                <Link to="/viddilenya">до стаціонарних відділень</Link>
              </span>{" "}
              Ivancom в Польщі.
            </li>
            <li className={s.rulesitem}>
              • Доставляємо <span>від 4-х робочих днів</span>
            </li>
            <li className={s.rulesitem}>
              • Мінімальна вартість послуги 40 зл до 4 одиниць ліків
            </li>
            <li className={s.rulesitem}>
              • Ліки, які були вкладені до посилки, рахуються окремо по тарифу
              "Ліки"
            </li>
            <li className={s.rulesitem}>
              • Відправлення здійснюється після 100% сплати на польський або
              український рахунок
            </li>
          </ul>
        </div>
      </section>
      <section ref={formRef} className={s.formsection}>
        <FormMedicinesUA url={testUrl} />
      </section>
    </div>
  );
};

export default MedicinesUa;
