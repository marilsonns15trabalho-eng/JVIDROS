import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="notfound-page">
      <div className="notfound-content">
        <p className="eyebrow">
          <span className="eyebrow-line" /> Página não encontrada
        </p>
        <h1>
          Esse vão
          <br />
          <em>está vazio.</em>
        </h1>
        <p className="notfound-text">
          O endereço que você procurou não existe ou foi movido. Que tal voltar
          para a página inicial e conhecer os nossos projetos?
        </p>
        <a className="button button-dark" href="/">
          <ArrowLeft size={16} aria-hidden="true" /> Voltar para o início
        </a>
      </div>
    </main>
  );
}