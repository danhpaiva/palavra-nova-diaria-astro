# Vernáculo

> **Expanda seu vocabulário, uma palavra erudita por dia**

Um site minimalista que apresenta uma palavra rara, erudita ou em desuso do português brasileiro a cada dia do ano, ajudando você a se tornar uma pessoa mais culta e eloquente.

## ✨ Conceito

**Vernáculo** oferece 365 palavras cuidadosamente selecionadas, uma para cada dia do ano (mais uma palavra bônus para anos bissextos). Cada palavra vem com:

- ✅ **Significado claro e conciso**
- ✅ **Etimologia** (origem da palavra)
- ✅ **Dois exemplos de uso** (cotidiano + literário)
- ✅ **Sinônimos e antônimos**
- ✅ **Classe gramatical e divisão silábica**
- ✅ **Selo de dificuldade** (1-5 estrelas)
- ✅ **Curiosidades** sobre a palavra (quando aplicável)

## 🎯 Funcionalidades

- 🌓 **Tema claro/escuro** com prioridade para preferência do sistema e persistência da escolha
- 📚 **Arquivo completo** com todas as palavras organizadas por dia
- 🔍 **Busca e filtros** por palavra e nível de dificuldade
- 📊 **Contador de progresso** (localStorage) mostrando quantas palavras você já conheceu
- 🔒 **Sistema de desbloqueio progressivo** - palavras futuras ficam bloqueadas até o dia correspondente
- 📤 **Compartilhamento** via Web Share API ou clipboard
- ⭐ **Dificuldade crescente** ao longo do ano, criando uma jornada de aprendizado

## 🛠️ Tecnologias

- **Astro** - Framework para site estático 100% performático
- **TypeScript** - Type safety no código
- **Content Collections** - Gestão estruturada das 365 palavras
- **GitHub Actions** - CI/CD automatizado
- **GitHub Pages** - Hospedagem gratuita

## 📂 Estrutura do Projeto

```
├── .github/
│   └── workflows/
│       ├── ci.yml          # Validação em PRs
│       └── deploy.yml      # Deploy automático
├── public/
│   └── favicon.svg
├── src/
│   ├── content/
│   │   ├── config.ts       # Schema das palavras
│   │   └── palavras/
│   │       ├── 001.json    # Dia 1
│   │       ├── 002.json    # Dia 2
│   │       ├── ...
│   │       ├── 365.json    # Dia 365
│   │       └── 366.json    # Ano bissexto
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro     # Palavra do dia
│       ├── arquivo.astro   # Todas as palavras
│       └── palavra/
│           └── [dia].astro # Página individual
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🚀 Como usar

### Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Validar schema e conteúdo
npm run validate
```

### Deploy

O projeto está configurado para deploy automático no GitHub Pages via GitHub Actions:

1. **CI** (`.github/workflows/ci.yml`) - Valida dados e build em cada PR
2. **CD** (`.github/workflows/deploy.yml`) - Faz deploy automático ao dar merge na branch `main`

**Configuração necessária:**

1. Vá em `Settings` → `Pages` do repositório
2. Source: **GitHub Actions**
3. Atualize `astro.config.mjs` com seu username:
   ```js
   site: 'https://SEU_USERNAME.github.io',
   base: '/palavra-nova-diaria-astro',
   ```

## 📝 Estrutura de uma Palavra

Cada palavra segue este schema (exemplo `001.json`):

```json
{
  "palavra": "acervo",
  "classe": "substantivo masculino",
  "silabacao": "a-cer-vo",
  "tonicidade": "paroxítona (cer)",
  "significado": "Conjunto de bens culturais ou documentos reunidos; coleção, patrimônio.",
  "etimologia": "Do latim acervus (monte, pilha, amontoado).",
  "exemploCotidiano": "O acervo da biblioteca municipal tem livros que ninguém mais lê, mas são verdadeiros tesouros.",
  "exemploLiterario": "O acervo do museu guardava as memórias de uma época em que o tempo parecia transcorrer de outro modo.",
  "sinonimos": ["coleção", "arquivo", "patrimônio", "repositório"],
  "antonimo": "escassez",
  "dificuldade": 1,
  "curiosidade": "A palavra mantém a mesma raiz latina que 'acervus', usada pelos romanos para descrever pilhas de grãos após a colheita."
}
```

## 🎨 Design

- **Fontes:**
  - **Playfair Display** (palavra principal) - dramática, elegante
  - **Inter** (corpo e UI) - limpa, legível
- **Cores:** sistema de design tokens CSS com suporte a tema claro/escuro
- **Filosofia:** minimalismo editorial, a palavra como protagonista

## 🤝 Contribuindo

Contribuições são bem-vindas! Para adicionar ou corrigir palavras:

1. Edite o arquivo JSON correspondente em `src/content/palavras/`
2. Valide com `npm run validate`
3. Abra um PR (o CI vai validar automaticamente)

## 📄 Licença

MIT License - veja [LICENSE](LICENSE) para detalhes.

---

**Vernáculo** - Uma jornada de 365 dias pelo vocabulário erudito da língua portuguesa.
