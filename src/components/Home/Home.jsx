// /components/Home/Home.jsx

import styles from "./Home.module.css";
import site from "./site.png";
function Home() {
  return (
    <div className={styles.home} id="page-wrap">
      {/* <iframe
        src="https://example.com"
        style={{
          width: "100%",
          height: "100vh",
          border: "none",
        }}
        title="Embedded Page"
      /> */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
        voluptatem dicta modi accusantium voluptates labore commodi porro ipsa
        iure, fugiat laudantium saepe id totam ratione rerum amet quasi
        repudiandae assumenda?
      </p>
      {/* <img src={site} alt="sss" width="" /> */}
    </div>
  );
}

export default Home;
