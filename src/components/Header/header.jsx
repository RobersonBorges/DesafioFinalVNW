import logo from "../../assets/livroHeader.png";
import search from "../../assets/busca.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "../../Pages/Inicio/inicio";
import QueroDoar from "../../Pages/QueroDoar/queroDoar";
import Doados from "../../Pages/Doados/doados";
import S from "./header.module.scss";

export default function Header() {
  return (
    <BrowserRouter>
      <header className={S.header}>
        <section className={S.logoHeader}>
          <img src={logo} alt="Logo do site" />
          <h1>Livros Vai na Web</h1>
        </section>
        <nav className={S.navHeader}>
          <ul>
            <li>
              <Link to="/" >
                {" "}
                Inicio{" "}
              </Link>
            </li>
            <li>
              <Link to="/doados" >
                Livros Doados
              </Link>
            </li>
            <li>
              <Link to="/queroDoar" >
                Quero Doar
              </Link>
            </li>
          </ul>
        </nav>
        <section className={S.barraDeBusca}>
          <input type="text" placeholder="O que você procura ?" />
          <img src={search} alt="imagem de uma lupa no input" />
        </section>
      </header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/doados" element={<Doados />} />
        <Route path="/queroDoar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  );
}
