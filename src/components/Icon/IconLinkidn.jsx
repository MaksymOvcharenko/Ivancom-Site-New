import { useState } from "react";

const iconStyles = {
  default: { fill: "white" },
  hover: { fill: "blue" },
};

const IconLinkidn = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={hovered ? iconStyles.hover : iconStyles.default}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.5 0C12.3122 0 0 12.3122 0 27.5C0 42.6878 12.3122 55 27.5 55C42.6878 55 55 42.6878 55 27.5C55 12.3122 42.6878 0 27.5 0ZM29.7145 22.4535H24.1435V42H30.1435V32.5305C30.1435 29.358 31.321 27.3405 34.1545 27.3405C36.1975 27.3405 37 29.2125 37 32.532V42H43V31.2045C43 25.3755 41.593 22.1985 35.6665 22.1985C32.575 22.1985 30.517 23.6325 29.7145 25.2285V22.4535ZM19.855 22.1985В41.745H13.855V22.1985H19.855ZM20.4211 17.2899C20.615 16.8259 20.7147 16.3279 20.7145 15.825C20.7145 14.8095 20.308 13.8375 19.585 13.1205C18.8605 12.4035 17.8795 12 16.8565 12C15.8354 11.9996 14.8553 12.4022 14.1295 13.1205C13.405 13.8375 13 14.8095 13 15.825C13.0009 16.3278 13.101 16.8256 13.2945 17.2896C13.4881 17.7537 13.7713 18.1751 14.128 18.5295C14.8545 19.2468 15.8341 19.6493 16.855 19.65C17.8777 19.6525 18.8596 19.2489 19.585 18.528C19.943 18.1748 20.2272 17.7539 20.4211 17.2899Z"
        style={hovered ? iconStyles.hover : iconStyles.default}
      />
    </svg>
  );
};

export default IconLinkidn;
