import fb from "../../assets/fb.png";
import ig from "../../assets/ig.png";
import ytb from "../../assets/ytb.png";
import twitter from "../../assets/twitter.png";
import lkdln from "../../assets/lkdln.png";
import S from "./footer.module.scss";

export default function Footer() {
  return (
    <footer>
      <section className={S.footerVNW}>
        <h3>4002-8922</h3>
        <nav>
          <a href="">
            {" "}
            <img src={fb} alt="" />
          </a>
          <a href="">
            {" "}
            <img src={twitter} alt="" />
          </a>
          <a href="">
            {" "}
            <img src={ytb} alt="" />
          </a>
          <a href="">
            {" "}
            <img src={lkdln} alt="" />
          </a>
          <a href="">
            {" "}
            <img src={ig} alt="" />
          </a>
        </nav>
      </section>
      <section className={S.footerDireitos}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p>
      </section>
    </footer>
  );
}
