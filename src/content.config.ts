import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const palavrasCollection = defineCollection({
    loader: glob({ pattern: '**/*.json', base: './src/content/palavras' }),
    schema: z.object({
        palavra: z.string(),
        classe: z.string(),
        silabacao: z.string(),
        tonicidade: z.string(),
        significado: z.string(),
        etimologia: z.string(),
        exemploCotidiano: z.string(),
        exemploLiterario: z.string(),
        sinonimos: z.array(z.string()),
        antonimo: z.string().optional(),
        dificuldade: z.number().min(1).max(5),
        curiosidade: z.string().optional(),
    }),
});

export const collections = {
    palavras: palavrasCollection,
};
