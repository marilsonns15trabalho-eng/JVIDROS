/* Oficina Editorial: texto em Manrope, headlines em DM Serif Display, composição assimétrica, grafite + areia + Âmbar Reflexo. */
import { type ReactNode, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  Instagram,
  Menu,
  MessageCircle,
  MoveRight,
  X,
} from "lucide-react";

const whatsappMessage = encodeURIComponent(
  "Olá! Vim pelo site da JVidros e gostaria de solicitar um orçamento.",
);
// Número real da JVidros como fallback (garante funcionamento mesmo sem .env)
const whatsappNumber =
  import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, "") || "5571986110762";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
const whatsappCatalogLink = `https://wa.me/c/${whatsappNumber}`;
const instagramLink = "https://www.instagram.com/julivanio/";

const projects = [
  {
    number: "01",
    title: "Sacadas e varandas",
    category: "Fechamento em vidro",
    image: "/images/sacada.webp",
    width: 1000,
    height: 1250,
  },
  {
    number: "02",
    title: "Box sob medida",
    category: "Banheiros e interiores",
    image: "/images/box.webp",
    width: 1000,
    height: 1250,
  },
  {
    number: "03",
    title: "Ambientes integrados",
    category: "Esquadrias e painéis",
    image: "/images/comercial.webp",
    width: 1000,
    height: 1250,
  },
];

const services = [
  [
    "01",
    "Fechamento de sacadas",
    "Mais conforto, proteção e uma vista limpa sem abrir mão da arquitetura.",
  ],
  [
    "02",
    "Box e divisórias",
    "Vidros sob medida para banheiros e ambientes que pedem leveza e precisão.",
  ],
  [
    "03",
    "Portas e painéis",
    "Soluções em vidro que conectam espaços e deixam a luz atravessar.",
  ],
  [
    "04",
    "Projetos personalizados",
    "A gente entende o espaço, indica o melhor sistema e cuida da instalação.",
  ],
];

interface WhatsAppLinkProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  "aria-label"?: string;
}

function WhatsAppLink({
  children,
  className,
  onClick,
  "aria-label": ariaLabel,
}: WhatsAppLinkProps) {
  if (!whatsappNumber) {
    return (
      <span
        className={`${className ?? ""} contact-pending`}
        aria-disabled="true"
        title="O número de WhatsApp da JVidros ainda não foi configurado."
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={whatsappLink}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape") {
      setMenuOpen(false);
    }
  };

  return (
    <main className="site-shell" onKeyDown={handleKeyDown}>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <div id="conteudo">
      <header className="topbar">
        <a href="#inicio" className="brand" aria-label="JVidros início">
          <span className="brand-mark" aria-hidden="true">
            <span />
          </span>
          <span>
            J<span>Vidros</span>
          </span>
        </a>
        <nav
          id="primary-navigation"
          className={menuOpen ? "nav-links open" : "nav-links"}
          aria-label="Navegação principal"
        >
          <a href="#servicos" onClick={() => setMenuOpen(false)}>
            Serviços
          </a>
          <a href="#projetos" onClick={() => setMenuOpen(false)}>
            Projetos
          </a>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>
            A JVidros
          </a>
          <WhatsAppLink
            className="nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Pedir orçamento <ArrowUpRight size={15} aria-hidden="true" />
          </WhatsAppLink>
        </nav>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-line" /> Vidros que desenham espaços
          </p>
          <h1>
            A luz muda.
            <br />
            <em>O acabamento fica.</em>
          </h1>
          <p className="hero-lead">
            Projetos em vidro sob medida para casas, apartamentos e negócios
            que pedem mais do que transparência: pedem presença.
          </p>
          <div className="hero-actions">
            <WhatsAppLink className="button button-dark">
              Falar com a JVidros <MoveRight size={18} aria-hidden="true" />
            </WhatsAppLink>
            <a
              className="button button-outline"
              href={whatsappCatalogLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver catálogo de projetos no WhatsApp"
            >
              Ver catálogo <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <a className="text-link" href="#projetos">
              Ver projetos <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-note">
            <span>Atendimento próximo</span>
            <span>Instalação cuidadosa</span>
            <span>Acabamento preciso</span>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="/images/hero.webp"
            width="1600"
            height="900"
            fetchPriority="high"
            decoding="async"
            alt="Fachada urbana com sacada e fechamento em vidro"
          />
          <div className="hero-stamp" aria-hidden="true">
            <span>J</span>
            <small>
              Projetos
              <br />
              em vidro
              <br />
              sob medida
            </small>
          </div>
          <div className="hero-caption" aria-hidden="true">
            <span>JVD / 2026</span>
            <span>Vidros para a cidade</span>
          </div>
        </div>
      </section>

      <section className="intro-strip" aria-label="Identidade JVidros">
        <div className="section-index">
          01 <span>/</span> identidade
        </div>
        <p>
          O vidro transforma a cidade.
          <br />
          <strong>O acabamento faz tudo encaixar.</strong>
        </p>
        <div className="scroll-cue" aria-hidden="true">
          <ChevronDown size={18} /> role para explorar
        </div>
      </section>

      <section id="servicos" className="services section-pad">
        <div className="section-head">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" /> O que fazemos
            </p>
            <h2>
              O projeto certo
              <br />
              <em>começa no detalhe.</em>
            </h2>
          </div>
          <p className="section-description">
            Do primeiro contato à instalação, cada etapa é pensada para que o
            vidro valorize o seu espaço — e não apenas ocupe um vão.
          </p>
        </div>
        <div className="service-list">
          {services.map(([num, title, text]) => (
            <WhatsAppLink className="service-row" key={num}>
              <span className="service-num">{num}</span>
              <span className="service-title">{title}</span>
              <span className="service-text">{text}</span>
              <ArrowUpRight
                className="service-arrow"
                size={22}
                aria-hidden="true"
              />
            </WhatsAppLink>
          ))}
        </div>
      </section>

      <section id="projetos" className="projects section-pad">
        <div className="section-head project-head">
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" /> Portfólio
            </p>
            <h2>
              Feito para
              <br />
              <em>ficar bonito.</em>
            </h2>
          </div>
          <a
            className="text-link"
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={16} aria-hidden="true" /> acompanhar no Instagram
          </a>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <WhatsAppLink
              className={
                index === 1 ? "project-card project-card-featured" : "project-card"
              }
              key={project.number}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  width={project.width}
                  height={project.height}
                  loading="lazy"
                  decoding="async"
                  alt={project.title}
                />
                <span className="project-overlay">
                  ver solução <ArrowUpRight size={17} aria-hidden="true" />
                </span>
              </div>
              <div className="project-meta">
                <span>{project.number}</span>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
              </div>
            </WhatsAppLink>
          ))}
        </div>
      </section>

      <section id="sobre" className="about section-pad">
        <div className="about-number">02</div>
        <div className="about-content">
          <p className="eyebrow">
            <span className="eyebrow-line" /> A JVidros
          </p>
          <h2>
            Transparência
            <br />
            <em>do começo ao fim.</em>
          </h2>
          <p>
            Somos uma vidraçaria que acredita que um bom projeto começa
            ouvindo. Entendemos o ambiente, indicamos a solução mais segura e
            entregamos um acabamento que continua fazendo sentido depois da
            instalação.
          </p>
          <a
            className="button button-outline"
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Conhecer o trabalho <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
        <div className="about-detail" aria-hidden="true">
          <span>JVD / 01</span>
          <strong>
            Precisão que
            <br />
            valoriza o urbano.
          </strong>
          <span className="detail-line" />
        </div>
      </section>

      <section id="contato" className="contact-banner">
        <div className="contact-ghost" aria-hidden="true">
          ORÇAMENTO
        </div>
        <div className="contact-content">
          <p className="eyebrow light">
            <span className="eyebrow-line" /> Vamos conversar
          </p>
          <h2>
            Seu espaço já
            <br />
            <em>tem uma ideia?</em>
          </h2>
          <p>
            Mande uma foto, conte o que você precisa e receba uma orientação
            inicial da JVidros.
          </p>
          <WhatsAppLink className="button button-amber">
            <MessageCircle size={18} aria-hidden="true" /> Pedir orçamento pelo
            WhatsApp
          </WhatsAppLink>
          <a
            className="button button-outline"
            href={whatsappCatalogLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver catálogo <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a className="contact-phone" href="tel:+5571986110762">
            (71) 98611-0762
          </a>
          {!whatsappNumber && (
            <p className="contact-status" role="status">
              O número de atendimento via WhatsApp ainda precisa ser informado
              pela JVidros.
            </p>
          )}
        </div>
        <div className="contact-side" aria-hidden="true">
          atendimento
          <br />
          direto <span>↗</span>
        </div>
      </section>

      <footer className="footer">
        <a href="#inicio" className="brand" aria-label="JVidros início">
          <span className="brand-mark" aria-hidden="true">
            <span />
          </span>
          <span>
            J<span>Vidros</span>
          </span>
        </a>
        <p>Vidros sob medida para espaços que merecem mais luz.</p>
        <div className="footer-contact">
          <a href="tel:+5571986110762">(71) 98611-0762</a>
          <span>Salvador e região</span>
        </div>
        <div className="footer-links">
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={15} aria-hidden="true" /> Instagram
          </a>
          <WhatsAppLink>
            <MessageCircle size={15} aria-hidden="true" /> WhatsApp
          </WhatsAppLink>
        </div>
        <span className="copyright">© 2026 JVidros</span>
      </footer>
      </div>
    </main>
  );
}
