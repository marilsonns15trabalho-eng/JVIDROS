# JVidros — pacote do site

Este pacote contém o código-fonte completo do catálogo responsivo da JVidros, desenvolvido em React + Vite + Tailwind CSS.

## Como executar localmente

Use Node.js 18 ou superior. Na pasta do projeto, execute:

```bash
pnpm install
pnpm dev
```

Para gerar uma versão de produção:

```bash
pnpm build
pnpm preview
```

## Personalizações pendentes

O botão de orçamento usa uma mensagem pronta do WhatsApp, mas está sem número de destino porque o telefone da empresa ainda não foi informado. Para conectar diretamente, abra `client/src/pages/Home.tsx` e substitua a variável `whatsappLink` por um endereço no formato `https://wa.me/55DDDNUMERO?text=...`.

As imagens do site usam URLs persistentes do armazenamento do projeto, já configuradas no código. Elas foram produzidas para a direção azul, branca e grafite aprovada, com apartamentos, sacadas, banheiro urbano e fachada comercial. Para usar fotografias reais da JVidros, substitua os valores de `image` no array `projects` e o `src` do hero.

## Estrutura principal

| Caminho | Função |
|---|---|
| `client/src/pages/Home.tsx` | Conteúdo e estrutura da página principal |
| `client/src/index.css` | Identidade visual, layout e responsividade |
| `client/index.html` | SEO básico, fontes e metadados sociais |
| `ideas.md` | Direção de design e decisões de marca |
| `todo.md` | Checklist da última revisão |

O pacote inclui também os arquivos de configuração, componentes de interface e scripts necessários para desenvolvimento e build.
