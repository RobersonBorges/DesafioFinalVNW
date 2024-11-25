
import S from "./inicio.module.scss";
import Balanca from "../../assets/balanca.png";
import Community from "../../assets/community.png";
import Transform from "../../assets/transform.png";
import Reading from "../../assets/reading.png";

export default function Inicio() {
  return (
    <main>
      <section className={S.post}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>
      <section className={S.devoDoar}>
        <div>
          <h2> POR QUE DEVO DOAR ?</h2>
        </div>
        <section className={S.cards}>
          <article>
            <img src={Community} alt="" />
            <p>
              Oferece livros a quem não tem acesso, ajudando a reduzir a
              exclusão social.
            </p>
          </article>
          <article>
            <img src={Reading} alt="" />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </article>
          <article>
            <img src={Transform} alt="" />
            <p>
              Fornece conhecimento e inspiração, permitindo que indivíduos
              transformem suas vidas.
            </p>
          </article>
          <article>
            <img src={Balanca} alt="" />
            <p>
              Garante que todos, independentemente de sua condição, tenham
              oportunidades de aprendizado.
            </p>
          </article>
        </section>
      </section>
    </main>
  );
}