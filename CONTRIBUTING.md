# Como Contribuir com Palavras

Obrigado por querer contribuir com o **Vernáculo**! Este guia explica como adicionar ou melhorar palavras no projeto.

## 📋 Estrutura de uma Palavra

Cada palavra fica em um arquivo JSON em `src/content/palavras/`, numerado de `001.json` a `366.json`.

### Campos obrigatórios

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
  "dificuldade": 1
}
```

### Campos opcionais

```json
{
  "antonimo": "escassez",
  "curiosidade": "A palavra mantém a mesma raiz latina que 'acervus', usada pelos romanos para descrever pilhas de grãos após a colheita."
}
```

## ✅ Critérios de Qualidade

### 1. Escolha da palavra

- ✅ **Erudita ou pouco comum** no dia a dia
- ✅ **Útil e interessante**, não apenas obscura
- ✅ **Viva na língua portuguesa**, mesmo que rara
- ❌ **Evite:** gírias, estrangeirismos não incorporados, neologismos sem uso

### 2. Classe gramatical

Siga o padrão do dicionário:
- "substantivo masculino" / "substantivo feminino"
- "adjetivo"
- "verbo transitivo" / "verbo intransitivo"
- "advérbio"
- "interjeição"

### 3. Silabação e tonicidade

```json
"silabacao": "a-cer-vo",
"tonicidade": "paroxítona (cer)"
```

Tipos de tonicidade:
- **Oxítona:** última sílaba tônica (ca-fé)
- **Paroxítona:** penúltima sílaba tônica (me-sa)
- **Proparoxítona:** antepenúltima sílaba tônica (mé-di-co)

### 4. Significado

- Clara e concisa
- Não copie literalmente do dicionário (direitos autorais)
- Parafraseie com suas próprias palavras
- Se usar múltiplos sentidos, separe com ponto e vírgula

### 5. Etimologia

```json
"etimologia": "Do latim acervus (monte, pilha, amontoado)."
```

- Sempre comece com "Do latim", "Do grego", "Do tupi", etc.
- Inclua o significado original entre parênteses
- Se a palavra passou por outras línguas, mencione brevemente

### 6. Exemplos (o mais importante!)

**Exemplo cotidiano:**
- Tom coloquial, natural
- Como alguém usaria em conversa ou texto informal
- Pode ter humor suave
- Não force o uso

**Exemplo literário:**
- Tom narrativo, ensaístico ou poético
- Pode ser mais elaborado
- Mostre a palavra em contexto "culto"
- Mas ainda deve soar natural

❌ **Evite:**
```json
"exemploCotidiano": "A perisologia é ruim."  // Muito simples
"exemploLiterario": "Utilizou-se de perisologia no discurso."  // Forçado
```

✅ **Prefira:**
```json
"exemploCotidiano": "O discurso estava cheio de perisologia, ele repetia a mesma coisa de dez jeitos diferentes.",
"exemploLiterario": "A perisologia que permeava seus escritos revelava não eloquência, mas a incapacidade de síntese que marca os espíritos verbosos."
```

### 7. Sinônimos

- Liste 2-5 sinônimos
- Do mais comum ao menos comum
- Devem ser realmente intercambiáveis no contexto
- Array JSON: `["sinônimo1", "sinônimo2"]`

### 8. Antônimo (opcional)

- Apenas se houver um antônimo claro
- String simples: `"escassez"`
- Se não houver, omita o campo

### 9. Dificuldade

Escala de 1 a 5:
- **1:** Pouco comum mas reconhecível (acervo, ínfimo)
- **2:** Rara mas presente em literatura (pungente, escrutínio)
- **3:** Erudita, técnica ou literária (efêmero, oblíquo)
- **4:** Muito rara, arcaica ou técnica avançada (ínclito, lúgubre)
- **5:** Extremamente rara ou em desuso (perisologia, algures)

**Distribuição sugerida ao longo do ano:**
- Dias 1-90: Dificuldade 1-2
- Dias 91-200: Dificuldade 2-3
- Dias 201-300: Dificuldade 3-4
- Dias 301-365: Dificuldade 4-5

### 10. Curiosidade (opcional)

Adicione se tiver algo genuinamente interessante:
- Origem histórica curiosa
- Uso em contextos específicos
- Relação com outras palavras
- Mudança de significado ao longo do tempo

❌ **Evite** curiosidades óbvias ou repetitivas.

## 🔄 Processo de Contribuição

### 1. Edite o arquivo

Escolha um arquivo placeholder em `src/content/palavras/` (ex: `042.json`) e substitua por uma palavra real.

### 2. Valide localmente

```bash
npm run validate
npm run build
```

Se houver erros de validação, o build vai falhar com mensagem clara.

### 3. Teste visualmente

```bash
npm run dev
```

Acesse `/palavra/42` (ou o número que você editou) e verifique se tudo está correto.

### 4. Abra um Pull Request

- Título: `feat: adiciona palavra "acervo" (dia 42)`
- Descrição: opcional, mas explique se fez escolhas específicas

### 5. CI vai validar automaticamente

O GitHub Actions vai:
- ✅ Validar o schema
- ✅ Fazer build de teste
- ✅ Verificar se há pelo menos 365 palavras

## 🎨 Dicas de Curadoria

### Fontes de inspiração

**Dicionários:**
- [Dicionário Priberam](https://dicionario.priberam.org/)
- [Michaelis](https://michaelis.uol.com.br/)
- Dicionário Houaiss (versão física)

**Literatura clássica:**
- Machado de Assis
- Eça de Queirós
- Guimarães Rosa
- Fernando Pessoa

**Vocabulários técnicos:**
- Medicina, direito, arquitetura
- Filosofia, retórica
- Música, artes plásticas

### Categorias interessantes

1. **Adjetivos descritivos:**
   - Emoções: lúgubre, jocoso, soturno
   - Aparência: esguio, ímprobo, lasso

2. **Substantivos abstratos:**
   - ânsia, escárnio, júbilo, torpor

3. **Verbos raros:**
   - alvitrar, escrutar, lograr, macular

4. **Palavras de origem indígena/africana:**
   - carijó, cacimba, moquém, candeia

5. **Arcaísmos belos:**
   - algures, alhures, outrossim, deveras

6. **Termos técnicos acessíveis:**
   - anamnese, silogismo, cânone, elipse

## ❓ Dúvidas

Abra uma [issue](../../issues) se tiver dúvidas sobre:
- Se uma palavra é adequada
- Como classificar dificuldade
- Etimologia incerta
- Qualquer outro aspecto

---

**Obrigado por contribuir com o Vernáculo!** 📚✨
