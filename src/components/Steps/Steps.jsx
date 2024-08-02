/* eslint-disable react/no-unescaped-entities */
import { GiCheckMark } from "react-icons/gi";
import s from "./Steps.module.css";
const Steps = () => {
  return (
    <div>
      <div className={s.home}>
        <h1 className={s.title}>Як відправити через IVANCOM?</h1>
        <p className={s.description}>3 простих кроки</p>
        <div className={s.iconplace}>
          {/* <IoIosArrowDown
                          className={s.icon}
                          size={48}
                          onClick={scrollToSection}
                        /> */}
        </div>
      </div>
      <div className={s.stepcont}>
        <ul className={s.steplist}>
          <li className={s.stepitem}>
            <div className={s.itemicon}>
              <GiCheckMark size={52} className={s.icon} />
            </div>
            <p className={s.texticon}>
              <span>
                Крок 1: Відправ посилку з найближчого відділення Нової Пошти на
                наш склад в Україні.
              </span>
              <br />
              <br />У відділенні надай наступну інформацію: <br />
              <span>- Код ЄДРПОУ: 3221718269</span>
              <br /> Цей код автоматично підтягне всі дані нашого відділення у
              системі. <br />
              <br />
              <span> Але обов'язково перевір, чи вірно вказані дані:</span>{" "}
              <br />
              <br /> ФОП Кисіль Людмила Анатоліївна <br />
              +380 (95) 801-04-74 <br /> Львівська область, с. Гостинцеве <br />{" "}
              НП №1
            </p>
          </li>
          <li className={s.stepitem}>
            <div className={s.itemicon}>
              <GiCheckMark size={52} className={s.icon} />
            </div>
            <p className={s.texticon}>
              <span>Крок 2: Заповни нашу форму відправки</span> <br />
              <br /> Це допоможе нам відстежити вашу посилку та гарантувати її
              безпечну та вчасну доставку.
            </p>
          </li>
          <li className={s.stepitem}>
            <div className={s.itemicon}>
              <GiCheckMark size={52} className={s.icon} />
            </div>
            <p className={s.texticon}>
              <span>Крок 3:</span> <br />
              <br />
              Ні про що не турбуйся! Тепер вся справа за нами:)
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Steps;
