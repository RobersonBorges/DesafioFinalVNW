import S from './doados.module.scss';
export default function CardLivros({ livros }) {
  return (

 <section className={S.boxDoados}>
      <h2>Livros Doados</h2>
      <section className={S.boxCard}>
      {livros.map((livro) => (
        <article key={livro.id}>
          <img src={livro.imagem_url} alt={`imagem do livro ${livro.titulo}`} />
          <h3>{livro.titulo}</h3>
          <p>{livro.autor}</p>
          <p>{livro.categoria}</p>
        </article>
      ))}
    </section>
    </section>
  );

}