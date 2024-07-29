/* eslint-disable react/no-unescaped-entities */

import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import s from "./FAQ.module.css";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClickRotate = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Як мені відправити посилку з території України за кордон?",
      answer: (
        <>
          <p>
            Твої відправлення курсують країною через наш склад в с.Гостинцеве
            (Львівська обл.). Відправляй посилки на нього службою Нова Пошта:
          </p>
          <ul>
            <li>
              Львівська область, с. Гостинцеве, відділення №1 (До 1000 кг та
              об'ємом до 70 см x 170 см x 300 см)
            </li>
            <li>
              Отримувач: ФОП Кисіль Людмила Анатоліївна ЄДРПОУ: 3221718269
            </li>
            <li>+380 (95) 801-04-74</li>
          </ul>
        </>
      ),
    },
    {
      question: "Як ми рахуємо термін доставки посилки з України за кордон?",
      answer: (
        <p>
          Час доставки рахується з моменту виїзду твоєї посилки з нашого складу
          в Україні (с. Гостинцеве, Львівська обл.). Мінімальний термін – від
          2-х днів (працюємо без вихідних).
        </p>
      ),
    },
    {
      question: "Чи застрахована моя посилка та скільки це коштує?",
      answer: (
        <p>
          Авжеж! Всі посилки з України до Польщі застраховані, страховий платіж
          становить 3% від оголошеної вартості. Всі посилки з Польщі до України
          застраховані, страховий платіж становить 1% від оголошеної вартості.
          Це обов’язковий страховий внесок, що захищає твою посилку.
        </p>
      ),
    },
    {
      question: "Як знизити вартість пересилки з України?",
      answer: (
        <>
          <p>
            Якщо твою посилку упаковують вже на пошті, уважно контролюй
            відповідність розмірів пакування до реальних розмірів твоєї посилки!
            Кожен зайвий сантиметр додасть вартості. Тож проси оператора
            підрізати коробку, якщо вона завелика. Як підрізати коробку
            самостійно, дивись в цьому відео!
          </p>
        </>
      ),
    },
    {
      question: "Хто має сплачувати відправку?",
      answer: (
        <p>
          – якщо посилка їде з України, сплатити її може як отримувач, так і
          відправник; якщо посилка їде до України, сплачує її виключно
          відправник.
        </p>
      ),
    },
    {
      question: "Що не можна перевозити з України до Євросоюзу?",
      answer: (
        <>
          <p>Заборонено перевозити:</p>
          <ul>
            <li>алкоголь</li>
            <li>тютюн (у будь-яких його формах) та електронні сигарети</li>
            <li>дорогоцінні метали</li>
            <li>гроші</li>
            <li>м’ясні продукти та сало</li>
            <li>молочну продукцію</li>
            <li>ікру риб</li>
            <li>вироби з хутра</li>
          </ul>
          <p>
            Посилки з забороненими речовинами чи речима повертаються відправнику
            за додаткові кошти.
          </p>
        </>
      ),
    },
    {
      question: "Чи можу я відправити до України дороговартісну посилку?",
      answer: (
        <p>
          Якщо вартість посилки перевищує 1000 зл., відправник доплачує 10% від
          різниці. Як рахуємо? Приклад: 1500 zł -1000 zł = 500 zł х 10% = 50 zł
          (доплата). Цю суму ми додаємо до вартості тарифу.
        </p>
      ),
    },
    {
      question:
        "Як замовити посилку з українського інтернет-магазину та доставити її в Європу?",
      answer: (
        <>
          <p>Коли ти купуєш товар в інтернет-магазині, роби наступне:</p>
          <ul>
            <li>
              Впиши ці дані доставки: Нова Пошта, Львівська область, с.
              Гостинцеве, відділення №1 (До 1000 кг та об'ємом до 70 см x 170 см
              x 300 см)
            </li>
            <li>
              Отримувач: ФОП Кисіль Людмила Анатоліївна ЄДРПОУ: 3221718269
            </li>
            <li>+380 (95) 801-04-74</li>
          </ul>
          <p>
            Заповни цю форму. Так ми дізнаємось, куди відправляти твою посилку.
            Коли посилка буде на території Польші, ти отримаєш SMS від IVANCOM.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className={s.faq}>
      <Accordion className={s.acc}>
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            onClick={() => handleClickRotate(index)}
            header={
              <div className={s.headeracc}>
                <p className={s.titleacc}>{item.question}</p>
                <IoCloseOutline
                  size={28}
                  className={`${s.icon} ${
                    activeIndex === index ? s.rotate : ""
                  }`}
                />
              </div>
            }
            className={s.accitem}
          >
            <div className={s.accdesc}>{item.answer}</div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQs;
