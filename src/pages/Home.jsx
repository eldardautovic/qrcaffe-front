import { GiCoffeeMug as Mug } from "react-icons/gi";
import { FiLogIn as LoIcon } from "react-icons/fi";

import style from "./Home.module.css";
import eldar from "../assets/images/eldar.jpg";
import esmin from "../assets/images/esmin.jpg";

const Home = () => {
  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <div className={style.logo}>
          <Mug className={style.icon} fontSize="1.9rem" />
          <h1>QR Caffe</h1>
        </div>
        <ul className={style.nav}>
          <li className={style.navitem}>
            <a href="#about">O nama</a>
          </li>
          <li className={style.navitem}>
            <a href="#team">Tim</a>
          </li>
          <li className={style.navitem}>
            <a href="#prices">Cijene</a>
          </li>
          <li className={style.navitem}>
            <a href="#hi">Prijava</a>
            <LoIcon className={style.icon} fontSize="1.3rem" />
          </li>
        </ul>
      </header>
      <section className={style.hero}>
        <h1 className={style.heading}>Jednostavno Vas pravimo boljim.</h1>
      </section>
      <section id="about" className={style.about}>
        <h1 className={style.header}>O nama</h1>
        <p className={style.paragraph}>
          Nasa misija je brza i jednostavna usluga, a tu misiju cemo ispuniti
          samo sa vama! <br /> <br />
          <span className={style.question}>Sta je to QR Caffe?</span> <br />
          <span className={style.answer}>
            Prije svega ovo je projekt ciji je cilj da uvede revolucionarnu
            promjenu pri funkcionisanju ugostiteljskih objekata, trenutno
            konkretno Kafe-a i Bar-ova. Mi se vodimo izjavom "Jednostavno je
            bolje".
          </span>
          <br /> <br />
          <span className={style.question}>
            Koji je razlog pokretanja ovog projekta?
          </span>
          <br />
          <span className={style.answer}>
            Razlog pokretanja ovog projekta je jednostavno zelja za
            jednostavnijim pristupom pri narudzbama kako za ugostitelje, tako i
            za klijente. Klijent zeli brzu uslugu, dok ugostitelj zeli
            nepogresivu uslugu i veci uvid u rad svojih zaposlenika i samog
            objekta.
          </span>
        </p>
      </section>
      <section className={style.breaker}>
        <h1 className={style.header}>Nasa misija je vasa satisfakcija.</h1>
      </section>
      <section id="team" className={style.team}>
        <h1 className={style.header}>Tim</h1>
        <div className={style.images}>
          <div className={style.eldar}>
            <img src={eldar} alt="Eldar" />
            <h1 className={style.headling}>Eldar Dautovic</h1>
            <p>Lead developer</p>
          </div>
          <div className={style.esmin}>
            <img src={esmin} alt="Esmin" />
            <h1 className={style.headling}>Esmin Sabljic</h1>
            <p>CEO</p>
          </div>
        </div>
      </section>
      <section id="prices" className={style.prices}>
        <h1 className={style.header}>Cijene</h1>
        <ul className={style.pricesList}>
          <li className={style.item}>
            <h1 className={style.itemHeader}>Basic</h1>
            <div className={style.line}></div>
            <ul className={style.features}>
              <li className={style.feature}>
                <p>Pristup panelu</p>
              </li>
              <li className={style.feature}>
                <p>Pristup izvjestaju</p>
              </li>
              <li className={style.feature}>
                <p>Pristup Podesavanjima</p>
              </li>
              <li className={style.feature}>
                <p>24/7 podrska</p>
              </li>
            </ul>
            <h1 className={style.itemPrice}>200 BAM/mjesecno</h1>
          </li>
          <li className={style.item}>
            <h1 className={style.itemHeader}>Premium</h1>
            <div className={style.line}></div>
            <ul className={style.features}>
              <li className={style.feature}>
                <p>Pristup panelu</p>
              </li>
              <li className={style.feature}>
                <p>Pristup izvjestaju</p>
              </li>
              <li className={style.feature}>
                <p>Pristup Podesavanjima</p>
              </li>
              <li className={style.feature}>
                <p>24/7 podrska</p>
              </li>
              <li className={style.feature}>
                <p>Mjesecna analiza</p>
              </li>
            </ul>
            <h1 className={style.itemPrice}>250 BAM/mjesecno</h1>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
