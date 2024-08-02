// import s from "../MedicinesUa/MedicinesUa.module.css";
import { testUrl } from "../url";
import FormMedicinesUA from "./FormMedicinesUA/FormMedicinesUA";
import s from "./MedicinesUa.module.css";
const MedicinesUa = () => {
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
      <FormMedicinesUA url={testUrl} />
    </div>
  );
};

export default MedicinesUa;
