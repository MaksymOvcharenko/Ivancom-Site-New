import s from "./UaEuCargo.module.css";
const UaEuCargo = () => {
  return (
    <div className={s.header}>
      <div className={s.home}>
        <h1 className={s.title}>Доставка посилок з України</h1>
        <p className={s.description}>
          документи, особисті речі, коштовні речі, вантажі для бізнесу тощо
        </p>
        <div className={s.iconplace}>
          {/* <IoIosArrowDown
                  className={s.icon}
                  size={48}
                  onClick={scrollToSection}
                /> */}
        </div>
      </div>
    </div>
  );
};

export default UaEuCargo;
