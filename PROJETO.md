# Projeto Vernáculo - Resumo de Implementação

## ✅ O que foi criado

### Estrutura completa do projeto Astro

**Site:** Vernáculo - Uma palavra erudita por dia, 365 dias por ano

### Páginas implementadas

1. **`/` (index.astro)** - Palavra do dia
   - Detecta automaticamente o dia do ano (1-365)
   - Mostra a palavra correspondente
   - Contador de palavras vistas (localStorage)
   - Botão de compartilhamento (Web Share API + fallback)

2. **`/arquivo` (arquivo.astro)** - Arquivo completo
   - Lista todas as 366 palavras
   - Busca por nome
   - Filtro por dificuldade
   - Sistema de bloqueio (palavras futuras ficam escondidas)

3. **`/palavra/[dia]` ([dia].astro)** - Páginas individuais
   - Uma página estática para cada dia (1-366)
   - Navegação entre dias consecutivos
   - Mesmo design da página principal

### Funcionalidades implementadas

✅ **Tema claro/escuro**
- Detecção automática via `prefers-color-scheme`
- Botão de alternância manual
- Persistência em localStorage
- CSS variables para cores

✅ **Content Collections**
- Schema TypeScript rigoroso
- Validação automática de dados
- 366 arquivos JSON (dias 1-366)

✅ **Todas as features extras solicitadas:**
- Arquivo/busca de palavras anteriores ✓
- Selo de dificuldade (1-5 estrelas) ✓
- Contador "palavras vistas" (localStorage) ✓
- Botão compartilhar ✓
- Curiosidade opcional por palavra ✓

✅ **CI/CD**
- `.github/workflows/ci.yml` - Validação em PRs
- `.github/workflows/deploy.yml` - Deploy automático no GitHub Pages

✅ **Design minimalista**
- Tipografia: Playfair Display + Inter
- Design tokens CSS
- Responsivo
- Foco na palavra como protagonista

## 📝 Estrutura de dados

Cada palavra (001.json a 366.json) contém:

```json
{
  "palavra": "acervo",
  "classe": "substantivo masculino",
  "silabacao": "a-cer-vo",
  "tonicidade": "paroxítona (cer)",
  "significado": "...",
  "etimologia": "Do latim acervus...",
  "exemploCotidiano": "...",
  "exemploLiterario": "...",
  "sinonimos": ["..."],
  "antonimo": "...",
  "dificuldade": 1,
  "curiosidade": "..."
}
```

## 🚀 Próximos passos

### 1. Curadoria das 365 palavras

**Status atual:** 5 palavras reais (001-005), restante são placeholders

**O que fazer:**
- Substituir os placeholders por palavras eruditas reais
- Seguir a progressão de dificuldade:
  - Dias 1-90: Dificuldade 1-2 (palavras pouco comuns)
  - Dias 91-200: Dificuldade 2-3 (raras mas literárias)
  - Dias 201-365: Dificuldade 3-5 (eruditas/técnicas/arcaicas)

**Fontes sugeridas:**
- Dicionários etimológicos
- Vocabulário Ortográfico da Língua Portuguesa (VOLP)
- Obras literárias clássicas (Machado de Assis, Eça de Queirós, Guimarães Rosa)
- Termos técnicos de áreas específicas (medicina, direito, filosofia)

### 2. Configurar GitHub Pages

**Passo a passo:**

1. Vá em `Settings` → `Pages` do repositório
2. Source: **GitHub Actions**
3. Faça o primeiro deploy:
   ```bash
   git add .
   git commit -m "feat: implementação completa do Vernáculo"
   git push origin main
   ```
4. Aguarde o workflow rodar (Actions tab)
5. Acesse: `https://SEU_USERNAME.github.io/palavra-nova-diaria-astro`

**IMPORTANTE:** Atualize o `astro.config.mjs`:
```js
site: 'https://SEU_USERNAME.github.io',
base: '/palavra-nova-diaria-astro',
```

### 3. Curadoria editorial (sugestões)

**Critérios de qualidade para cada palavra:**

- **Relevância:** palavra deve ser útil/interessante, não apenas obscura
- **Exemplos:** devem ser naturais, não forçados
- **Etimologia:** deve agregar contexto, não ser mecânica
- **Curiosidade:** quando incluir, deve ser genuinamente interessante

**Categorias de palavras sugeridas:**

- Adjetivos descritivos raros (pungente, lúgubre, prístino)
- Substantivos técnicos (escrutínio, perisologia, palimpsesto)
- Verbos pouco usados (escrutar, alvitrar, lograr)
- Palavras de origem indígena/africana (carijó, moquém, cacimba)
- Termos em desuso mas belos (algures, alhures, outrossim)

### 4. Melhorias futuras (opcional)

- **SEO:** Meta tags, Open Graph, Twitter Cards
- **Analytics:** Google Analytics ou Plausible
- **RSS Feed:** Para leitores acompanharem
- **Newsletter:** Palavra do dia por email
- **API pública:** JSON endpoint para desenvolvedores
- **PWA:** Service worker para uso offline

## 🛠️ Comandos úteis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview

# Validar conteúdo
npm run validate

# Gerar/atualizar palavras
node scripts/gerar-palavras.js
```

## 📊 Checklist de lançamento

- [ ] Curar as 365 palavras (substituir placeholders)
- [ ] Revisar todas as palavras (ortografia, exemplos, etimologia)
- [ ] Atualizar `astro.config.mjs` com username correto
- [ ] Testar build local (`npm run build`)
- [ ] Configurar GitHub Pages
- [ ] Fazer primeiro deploy
- [ ] Testar no ambiente de produção
- [ ] Compartilhar! 🎉

## 💡 Dicas de curadoria

**Fontes de palavras eruditas:**

1. **Vocabulários específicos:**
   - Medicina: anamnese, disúria, dispneia
   - Direito: alienígena, albará, alodial
   - Arquitetura: colunata, entablamento, frontão
   - Música: arpejo, cânone, staccato

2. **Literaturas clássicas:**
   - Machado de Assis: "azáfama", "petulância", "escárnio"
   - Eça de Queirós: "languidez", "opulência", "sórdido"

3. **Latinismos e helenismos:**
   - Do latim: ínclito, preclaro, nefasto
   - Do grego: ânodo, cátodo, epígrafe

4. **Palavras regionais cultas:**
   - Nordeste: algures, alhures, preamar
   - Sul: facínora, inaudito, térreo

---

**Projeto criado em:** 8 de julho de 2026  
**Framework:** Astro 7.0.7  
**Build status:** ✅ Funcionando  
**Palavras prontas:** 5/365  

**Próxima ação:** Curadoria das 360 palavras restantes
