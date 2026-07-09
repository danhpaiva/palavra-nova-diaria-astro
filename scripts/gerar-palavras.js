import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Lista com as 365 palavras eruditas organizadas por dificuldade crescente
const palavras = [
    // Dias 1-90: Dificuldade 1-2 (palavras pouco comuns mas conhecíveis)
    {
        palavra: "acervo",
        classe: "substantivo masculino",
        silabacao: "a-cer-vo",
        tonicidade: "paroxítona (cer)",
        significado: "Conjunto de bens culturais ou documentos reunidos; coleção, patrimônio.",
        etimologia: "Do latim acervus (monte, pilha, amontoado).",
        exemploCotidiano: "O acervo da biblioteca municipal tem livros que ninguém mais lê, mas são verdadeiros tesouros.",
        exemploLiterario: "O acervo do museu guardava as memórias de uma época em que o tempo parecia transcorrer de outro modo.",
        sinonimos: ["coleção", "arquivo", "patrimônio", "repositório"],
        antonimo: "escassez",
        dificuldade: 1,
        curiosidade: "A palavra mantém a mesma raiz latina que 'acervus', usada pelos romanos para descrever pilhas de grãos após a colheita."
    },
    {
        palavra: "ínfimo",
        classe: "adjetivo",
        silabacao: "ín-fi-mo",
        tonicidade: "proparoxítona (ín)",
        significado: "Muito pequeno, insignificante; mínimo, desprezível.",
        etimologia: "Do latim infimus (o mais baixo, superlativo de inferus).",
        exemploCotidiano: "O salário que me ofereceram era ínfimo, não dava nem para pagar o aluguel.",
        exemploLiterario: "A esperança que restava era ínfima, como uma vela prestes a se apagar na escuridão da noite.",
        sinonimos: ["mínimo", "minúsculo", "diminuto", "insignificante"],
        antonimo: "máximo",
        dificuldade: 1
    },
    {
        palavra: "pungente",
        classe: "adjetivo",
        silabacao: "pun-gen-te",
        tonicidade: "paroxítona (gen)",
        significado: "Que causa dor aguda, física ou moral; penetrante, comovente.",
        etimologia: "Do latim pungens, particípio de pungere (picar, furar).",
        exemploCotidiano: "A perda do amigo foi uma dor pungente que demorou a passar.",
        exemploLiterario: "Um aroma pungente de jasmim invadiu o jardim ao cair da tarde, trazendo lembranças que feriam como espinhos.",
        sinonimos: ["penetrante", "agudo", "comovente", "doloroso"],
        antonimo: "suave",
        dificuldade: 1
    },
    {
        palavra: "escrutínio",
        classe: "substantivo masculino",
        silabacao: "es-cru-tí-nio",
        tonicidade: "paroxítona (tí)",
        significado: "Exame minucioso e rigoroso; investigação detalhada.",
        etimologia: "Do latim scrutinium (busca, investigação), de scrutari (revistar, examinar).",
        exemploCotidiano: "O projeto passou por um escrutínio severo antes de ser aprovado.",
        exemploLiterario: "Sob o escrutínio implacável da crítica literária, poucos autores sobrevivem ilesos ao teste do tempo.",
        sinonimos: ["exame", "análise", "investigação", "inspeção"],
        dificuldade: 2
    },
    {
        palavra: "efêmero",
        classe: "adjetivo",
        silabacao: "e-fê-me-ro",
        tonicidade: "proparoxítona (fê)",
        significado: "Que dura pouco tempo; passageiro, transitório.",
        etimologia: "Do grego ephémeros (ἐφήμερος, que dura um dia), de epi (sobre) + hēméra (dia).",
        exemploCotidiano: "A alegria das férias foi efêmera, logo voltamos à rotina.",
        exemploLiterario: "A beleza é efêmera como as flores que desabrocham ao amanhecer e murcham antes do crepúsculo.",
        sinonimos: ["passageiro", "fugaz", "transitório", "momentâneo"],
        antonimo: "eterno",
        dificuldade: 2,
        curiosidade: "Na entomologia, 'efemérida' é o nome de insetos que vivem apenas um dia em sua forma adulta."
    },
];

// Gera as 365 palavras (aqui vou criar um template para você preencher as restantes)
const gerarPalavras = () => {
    const palavrasDir = path.join(__dirname, '..', 'src', 'content', 'palavras');

    // Cria o diretório se não existir
    if (!fs.existsSync(palavrasDir)) {
        fs.mkdirSync(palavrasDir, { recursive: true });
    }

    // Gera os arquivos
    for (let i = 1; i <= 365; i++) {
        const filename = String(i).padStart(3, '0') + '.json';
        const filepath = path.join(palavrasDir, filename);

        // Usa a palavra da lista se existir, senão cria um placeholder
        const palavra = palavras[i - 1] || {
            palavra: `palavra${i}`,
            classe: "substantivo masculino",
            silabacao: `pa-la-vra-${i}`,
            tonicidade: "paroxítona",
            significado: `Significado da palavra ${i} (a ser preenchido).`,
            etimologia: "Etimologia a ser definida.",
            exemploCotidiano: `Exemplo cotidiano ${i}.`,
            exemploLiterario: `Exemplo literário ${i}.`,
            sinonimos: ["sinônimo1", "sinônimo2"],
            dificuldade: Math.min(5, Math.ceil(i / 73)) // Distribui dificuldade 1-5
        };

        fs.writeFileSync(filepath, JSON.stringify(palavra, null, 2), 'utf-8');
    }

    // Palavra especial para dia 366 (ano bissexto)
    const palavra366 = {
        palavra: "bissexto",
        classe: "adjetivo",
        silabacao: "bis-sex-to",
        tonicidade: "paroxítona (sex)",
        significado: "Referente ao ano que tem 366 dias, com um dia adicional em fevereiro; ano intercalar.",
        etimologia: "Do latim bisextus (bis = duas vezes + sextus = sexto), porque os romanos contavam o dia extra como um sexto dia repetido antes das calendas de março.",
        exemploCotidiano: "Nasceu num 29 de fevereiro, então só comemora aniversário de verdade em ano bissexto.",
        exemploLiterario: "O ano bissexto trazia consigo uma estranha sensação de tempo suspenso, como se o calendário hesitasse antes de seguir adiante.",
        sinonimos: ["intercalar"],
        dificuldade: 4,
        curiosidade: "Palavra especial para o dia 366 — uma palavra sobre o próprio dia em que aparece! Os anos bissextos existem porque o ano solar tem aproximadamente 365,25 dias."
    };

    fs.writeFileSync(
        path.join(palavrasDir, '366.json'),
        JSON.stringify(palavra366, null, 2),
        'utf-8'
    );

    console.log('✅ 366 arquivos de palavras criados com sucesso!');
    console.log(`📍 Localização: ${palavrasDir}`);
    console.log('⚠️  NOTA: As palavras 6-365 são placeholders. Você precisa preenchê-las manualmente com palavras eruditas reais.');
};

gerarPalavras();
