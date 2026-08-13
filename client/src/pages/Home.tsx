/* Oficina Editorial: texto em Manrope, headlines em DM Serif Display, composição assimétrica, grafite + areia + Âmbar Reflexo. */
import { useState } from "react";
import { ArrowUpRight, ChevronDown, Instagram, Menu, MessageCircle, MoveRight, X } from "lucide-react";

const whatsappMessage = encodeURIComponent("Olá! Vim pelo site da JVidros e gostaria de solicitar um orçamento.");
const whatsappLink = `https://wa.me/?text=${whatsappMessage}`;
const instagramLink = "https://www.instagram.com/julivanio/";

const projects = [
  { number: "01", title: "Sacadas e varandas", category: "Fechamento em vidro", image: "/manus-storage/jvidros-urban-sacada_d9760d1c.jpg" },
  { number: "02", title: "Box sob medida", category: "Banheiros e interiores", image: "/manus-storage/jvidros-urban-box_94176527.jpg" },
  { number: "03", title: "Ambientes integrados", category: "Esquadrias e painéis", image: "/manus-storage/jvidros-urban-comercial_1fd7d037.jpg" },
];

const services = [
  ["01", "Fechamento de sacadas", "Mais conforto, proteção e uma vista limpa sem abrir mão da arquitetura."],
  ["02", "Box e divisórias", "Vidros sob medida para banheiros e ambientes que pedem leveza e precisão."],
  ["03", "Portas e painéis", "Soluções em vidro que conectam espaços e deixam a luz atravessar."],
  ["04", "Projetos personalizados", "A gente entende o espaço, indica o melhor sistema e cuida da instalação."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="site-shell">
      <header className="topbar">
        <a href="#inicio" className="brand" aria-label="JVidros início"><span className="brand-mark"><span /></span><span>J<span>Vidros</span></span></a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Navegação principal">
          <a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a>
          <a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>A JVidros</a>
          <a href={whatsappLink} className="nav-cta" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Pedir orçamento <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Vidros que desenham espaços</p>
          <h1>A luz muda.<br /><em>O acabamento fica.</em></h1>
          <p className="hero-lead">Projetos em vidro sob medida para casas, apartamentos e negócios que pedem mais do que transparência: pedem presença.</p>
          <div className="hero-actions"><a className="button button-dark" href={whatsappLink} target="_blank" rel="noreferrer">Falar com a JVidros <MoveRight size={18} /></a><a className="text-link" href="#projetos">Ver projetos <ArrowUpRight size={15} /></a></div>
          <div className="hero-note"><span>Atendimento próximo</span><span>Instalação cuidadosa</span><span>Acabamento preciso</span></div>
        </div>
        <div className="hero-visual"><img src="/manus-storage/jvidros-urban-hero_282e88d0.jpg" alt="Fachada urbana com sacada e fechamento em vidro" /><div className="hero-stamp"><span>J</span><small>Projetos<br />em vidro<br />sob medida</small></div><div className="hero-caption"><span>JVD / 2026</span><span>Vidros para a cidade</span></div></div>
      </section>

      <section className="intro-strip"><div className="section-index">01 <span>/</span> identidade</div><p>O vidro transforma a cidade.<br /><strong>O acabamento faz tudo encaixar.</strong></p><div className="scroll-cue"><ChevronDown size={18} /> role para explorar</div></section>

      <section id="servicos" className="services section-pad"><div className="section-head"><div><p className="eyebrow"><span className="eyebrow-line" /> O que fazemos</p><h2>O projeto certo<br /><em>começa no detalhe.</em></h2></div><p className="section-description">Do primeiro contato à instalação, cada etapa é pensada para que o vidro valorize o seu espaço — e não apenas ocupe um vão.</p></div><div className="service-list">{services.map(([num, title, text]) => <a href={whatsappLink} target="_blank" rel="noreferrer" className="service-row" key={num}><span className="service-num">{num}</span><span className="service-title">{title}</span><span className="service-text">{text}</span><ArrowUpRight className="service-arrow" size={22} /></a>)}</div></section>

      <section id="projetos" className="projects section-pad"><div className="section-head project-head"><div><p className="eyebrow"><span className="eyebrow-line" /> Portfólio</p><h2>Feito para<br /><em>ficar bonito.</em></h2></div><a className="text-link" href={instagramLink} target="_blank" rel="noreferrer"><Instagram size={16} /> acompanhar no Instagram</a></div><div className="project-grid">{projects.map((project, index) => <a href={whatsappLink} target="_blank" rel="noreferrer" className={index === 1 ? "project-card project-card-featured" : "project-card"} key={project.number}><div className="project-image"><img src={project.image} alt={project.title} /><span className="project-overlay">ver solução <ArrowUpRight size={17} /></span></div><div className="project-meta"><span>{project.number}</span><div><h3>{project.title}</h3><p>{project.category}</p></div></div></a>)}</div></section>

      <section id="sobre" className="about section-pad"><div className="about-number">02</div><div className="about-content"><p className="eyebrow"><span className="eyebrow-line" /> A JVidros</p><h2>Transparência<br /><em>do começo ao fim.</em></h2><p>Somos uma vidraçaria que acredita que um bom projeto começa ouvindo. Entendemos o ambiente, indicamos a solução mais segura e entregamos um acabamento que continua fazendo sentido depois da instalação.</p><a className="button button-outline" href={instagramLink} target="_blank" rel="noreferrer">Conhecer o trabalho <ArrowUpRight size={17} /></a></div><div className="about-detail"><span>JVD / 01</span><strong>Precisão que<br />valoriza o urbano.</strong><span className="detail-line" /></div></section>

      <section className="contact-banner"><div className="contact-ghost">ORÇAMENTO</div><div className="contact-content"><p className="eyebrow light"><span className="eyebrow-line" /> Vamos conversar</p><h2>Seu espaço já<br /><em>tem uma ideia?</em></h2><p>Mande uma foto, conte o que você precisa e receba uma orientação inicial da JVidros.</p><a className="button button-amber" href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Pedir orçamento pelo WhatsApp</a></div><div className="contact-side">atendimento<br />direto <span>↗</span></div></section>

      <footer className="footer"><a href="#inicio" className="brand"><span className="brand-mark"><span /></span><span>J<span>Vidros</span></span></a><p>Vidros sob medida para espaços que merecem mais luz.</p><div className="footer-links"><a href={instagramLink} target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram</a><a href={whatsappLink} target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp</a></div><span className="copyright">© 2026 JVidros</span></footer>
    </main>
  );
}
