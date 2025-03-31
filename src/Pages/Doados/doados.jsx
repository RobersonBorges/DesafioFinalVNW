import S from "./doados.module.scss";
import { useEffect, useState } from "react";
import CardLivros from "./cardLivros";
import axios from "axios";

export default function Doados() {
  const [livros, setLivros] = useState([]);

  const apiURL = "https://apilivrosvnw.onrender.com/livros";

  const obterLivrosDoados = async () => {
    try {
      const dataLivros = await axios.get(apiURL);
      setLivros(dataLivros.data);
    } catch (error) {
      console.error("Erro ao obter os livros:", error);
    }
  };

  useEffect(() => {
    obterLivrosDoados();
  }, []);

  return <CardLivros livros={livros} />;
}
