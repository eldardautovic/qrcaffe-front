import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.wrapper}>
      Made with ☕ by
      <a
        className={style.author}
        href="https://eldardautovic.github.io"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        Eldar Dautović
      </a>
    </div>
  );
};

export default Footer;
