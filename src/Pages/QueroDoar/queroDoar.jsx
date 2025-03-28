import S from "./queroDoar.module.scss";
import livro from "../../assets/Vector.png";
import axios from "axios";
import { useEffect, useState } from "react";

export default function QueroDoar() {

    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [imagem_url, setImagem_url] = useState("")

    const enviarDados = async () => {
      const urlApi = "https://apilivrosvnw.onrender.com/doar";    

      const dadosEnviar = {titulo, categoria, autor, imagem_url}

      await axios.post(urlApi, dadosEnviar);

      alert("livro cadastrado com sucesso!");
      limparCampos();
    }

    const limparCampos = () => {
      setTitulo("");
      setAutor("");
      setCategoria("");
      setImagem_url("");
    }

    const capturaTitulo = (e) => {
      setTitulo(e.target.value);
    }

    const capturaCategoria = (e) => {
      setCategoria(e.target.value);
    }

    const capturaAutor = (e) => {
      setAutor(e.target.value);
    }

    const capturaImagem_url = (e) => {
      setImagem_url(e.target.value);
    }



  return (
    <section className={S.boxPrincipal}>
      <section className={S.container}>
        <h2>
          Por favor, preencha o formulário com suas informações e as informações
          do Livro
        </h2>
        <form onSubmit={(e)=> {e.preventDefault()}}>
          <div>
            <img src={livro} alt="" />
            <h3>Informações do Livro</h3>
          </div>

          <input type="text" placeholder="Titulo" onChange={capturaTitulo} value={titulo} />
          <input type="text" placeholder="Categoria" onChange={capturaCategoria} value={categoria} />
          <input type="text" placeholder="Autor" onChange={capturaAutor} value={autor} />
          <input type="text" placeholder="Link da Imagem" onChange={capturaImagem_url} value={imagem_url} />
          <input type="submit" className={S.doar} value="Doar" onClick={enviarDados} />
        </form>
      </section>
    </section>
  );
}
