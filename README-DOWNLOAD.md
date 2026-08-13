# JVidros — Site oficial

Catálogo digital da JVidros — vidraçaria especializada em projetos em vidro sob medida.

## Tecnologias

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- Wouter (rotas)
- Lucide (ícones)

## Como executar localmente

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Variáveis de ambiente

Copie `.env.example` para `.env` e ajuste:

| Variável | Descrição |
|---|---|
| `VITE_WHATSAPP_NUMBER` | Número do WhatsApp no formato `55DDDNUMERO` (apenas dígitos) |
| `VITE_SITE_URL` | URL pública do site (usada para SEO/canonical) |

> O número de WhatsApp já possui fallback no código (`5571986110762`), então o site funciona mesmo sem `.env`.

## Chatbot Inteligente (100% Offline)

O site possui um chatbot flutuante **100% offline** que responde dúvidas dos visitantes com base em um banco de conhecimento local. Não requer API externa, não tem custos adicionais e funciona instantaneamente.

- **Banco de conhecimento**: `client/src/data/knowledgeBase.ts`
- **Lógica do bot**: `client/src/hooks/useChatBot.ts`
- **Componentes**: `ChatBot.tsx`, `ChatButton.tsx`, `ChatMessage.tsx`
- **Estilos**: `client/src/components/ChatBot.css`

### Funcionalidades

- Responde saudações e conversa cotidiana (olá, bom dia, obrigado, tchau)
- Conhece todos os serviços da JVidros (box, sacada, portas, divisórias, espelhos)
- Informa contato, endereço, horário e redes sociais
- Explica garantia, prazos e tipos de vidro
- Identifica intenção de orçamento e encaminha para o WhatsApp
- Quando não sabe responder, encaminha automaticamente para o WhatsApp com link pré-preenchido

## Deploy no Vercel

1. Suba o projeto para um repositório no GitHub.
2. No Vercel, importe o repositório.
3. O framework será detectado automaticamente como **Vite**.
4. Configure as variáveis de ambiente no painel da Vercel:
   - `VITE_WHATSAPP_NUMBER=5571986110762`
   - `VITE_SITE_URL=https://seu-dominio.vercel.app`
5. Deploy.

O arquivo `vercel.json` já está configurado com rewrites para SPA.

## Estrutura principal

| Caminho | Função |
|---|---|
| `client/src/pages/Home.tsx` | Conteúdo e estrutura da página principal |
| `client/src/index.css` | Identidade visual, layout e responsividade |
| `client/index.html` | SEO, fontes e metadados sociais |
| `client/public/` | Imagens, favicon, robots.txt e sitemap.xml |
| `client/src/data/knowledgeBase.ts` | Banco de conhecimento do chatbot offline |
| `client/src/hooks/useChatBot.ts` | Lógica do chatbot offline |
| `ideas.md` | Direção de design e decisões de marca |

## Contato

- WhatsApp: (71) 98611-0762
- Instagram: [@julivanio](https://www.instagram.com/julivanio/)