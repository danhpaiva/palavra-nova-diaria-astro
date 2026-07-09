// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://YOUR_USERNAME.github.io',
    base: '/palavra-nova-diaria-astro',
    output: 'static',
    build: {
        assets: '_assets'
    }
});
