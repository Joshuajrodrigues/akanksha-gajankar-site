import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import lottie from "astro-integration-lottie";
// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [
        mdx(),
        lottie(),
        sitemap(),
        tailwind({
            applyBaseStyles: false
        })
    ]
});
