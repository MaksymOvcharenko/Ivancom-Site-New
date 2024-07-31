import s from "./WordUa.module.css";
const WordUa = () => {
  return (
    <>
      <div className={s.header}>
        <div className={s.home}>
          <h1 className={s.title}>ДОСТАВКА З УСЬОГО СВІТУ В УКРАЇНУ</h1>
          <div className={s.iconplace}>
            {/* <IoIosArrowDown
                  className={s.icon}
                  size={48}
                  onClick={scrollToSection}
                /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default WordUa;
