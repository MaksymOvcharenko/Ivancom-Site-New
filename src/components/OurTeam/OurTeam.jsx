import s from "./OurTeam.module.css";
import team from "./team.jpeg";

const OurTeam = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>ПРО КОМАНДУ IVANCOM</h2>
      <p className={s.subtitle}>Давай знайомитись ближче!</p>
      <div className={s.content}>
        <img src={team} alt="Команда Ivancom" className={s.image} />
        <div className={s.text}>
          <p>2 грудня 2020 року ми відкрили свій перший офіс у Кракові :)</p>
          <br />
          <p>
            <strong>З того дня ми зросли до:</strong>
          </p>
          <br />
          <ul>
            <li>40+ працівників</li>
            <li>
              5 стаціонарних відділень у Польщі (Катовіце, Краків, Варшава,
              Вроцлав та Гданськ)
            </li>
            <li>кілька мобільних відділень</li>
            <li>власний автопарк та команда водіїв</li>
            <li>сортувальні бази в Україні</li>
          </ul>
          <br />
          <p>
            Час показав, що IVANCOM – це справжня родина! Ми вже пережили
            пандемію, а зараз, як можемо, допомагаємо ЗСУ пришвидшувати
            перемогу. Весь цей час ми активно волонтеримо та допомагаємо армії,
            людям та тваринкам.{" "}
            <strong>
              Бо це є наша велика цінність – бути людьми, дарувати турботу та
              підтримку іншим.
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
