# XStream Premium 🎬

XStream Premium é uma plataforma de streaming de alta fidelidade construída com as tecnologias mais modernas do ecossistema Web. O projeto transforma um protótipo estático em um produto digital escalável, performático e com design de nível mundial.

---

## 💼 Business Case

### O Problema
O mercado de streaming está saturado de interfaces complexas e lentas. Usuários buscam simplicidade, rapidez na descoberta de conteúdo e uma estética que transmita exclusividade.

### A Solução
Uma aplicação **Full Stack** ultra-veloz que utiliza Server-Side Rendering (SSR) para SEO e performance, integrada com a maior base de dados de cinema do mundo (TMDB), envolta em uma interface **Glassmorphism** que redefine o padrão visual de clones de streaming.

### Público-alvo
- Entusiastas de cinema e tecnologia.
- Desenvolvedores que buscam referências de UI/UX premium.
- Empresas de mídia que necessitam de interfaces de catálogo rápidas e responsivas.

### Proposta de Valor
- **Experiência Premium:** Design elegante e micro-animações fluidas.
- **Performance:** Carregamento instantâneo via Next.js 15 e Turbopack.
- **Escalabilidade:** Arquitetura pronta para integração com sistemas de pagamento e autenticação real.

---

## 🏗️ Arquitetura Técnica

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Linguagem:** TypeScript
- **Estilização:** TailwindCSS v4 (Glassmorphism System)
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **API de Dados:** The Movie Database (TMDB)

### Diferenciais de Engenharia
- **Resiliência:** Sistema de Fallback com dados mockados de alta qualidade caso a API esteja offline.
- **Glassmorphism UI:** Sistema de design baseado em transparências, desfoques e gradientes sutis.
- **Performance:** Otimização de imagens e renderização híbrida.

---

## 🚀 Como Executar

### Pré-requisitos
- Node.js 20+
- NPM ou Yarn

### Instalação
1. Clone o projeto e entre na pasta:
```bash
cd xstream-premium
```

2. Instale as dependências:
```bash
npm install
```

3. Configure a API Key (Opcional - o app possui fallback):
Crie um arquivo `.env.local` na raiz e adicione:
```env
NEXT_PUBLIC_TMDB_API_KEY=sua_chave_aqui
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

---

## 📄 Licença
Desenvolvido por **Antigravity AI** como um upgrade premium para o projeto de **Leonardo Wallace**.
