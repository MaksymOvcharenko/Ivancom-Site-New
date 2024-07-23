// import s from "./Partners.module.css";
// import dhl from "./img/dhl.png";
// import dpd from "./img/dpd.png";
// import fedex from "./img/fedex.png";
// import gls from "./img/gls.png";
// import inpost from "./img/inpost.png";
// import novaposhta from "./img/novaposhta.png";
// import poczta from "./img/poczta.png";
// import ups from "./img/ups.png";
// const Partners = () => {
//   return <div>Partners</div>;
// };

// export default Partners;

import s from "./Partners.module.css";
import dhl from "./img/dhl.png";
import dpd from "./img/dpd.png";
import fedex from "./img/fedex.png";
import gls from "./img/gls.png";
import inpost from "./img/inpost.png";
import novaposhta from "./img/novaposhta.png";
import poczta from "./img/poczta.png";
import ups from "./img/ups.png";

const Partners = () => {
  const partners = [
    { name: "DHL", logo: dhl },
    { name: "DPD", logo: dpd },
    { name: "FedEx", logo: fedex },
    { name: "GLS", logo: gls },
    { name: "InPost", logo: inpost },
    { name: "Nova Poshta", logo: novaposhta },
    { name: "Poczta Polska", logo: poczta },
    { name: "UPS", logo: ups },
  ];

  return (
    <div className={s.partnersContainer}>
      <h2 className={s.title}>НАШІ ПАРТНЕРИ:</h2>
      <p className={s.description}>
        ми співпрацюємо з надійними компаніями по цілому світу
      </p>
      <div className={s.gridContainer}>
        {partners.map((partner, index) => (
          <div key={index} className={s.partnerItem}>
            <img
              src={partner.logo}
              alt={partner.name}
              className={s.partnerLogo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
