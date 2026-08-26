import { defineConfig, passthroughImageService } from 'astro/config';
import solid from '@astrojs/solid-js';
import tailwindcss from '@tailwindcss/vite';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [solid(), mdx()],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ["svgo"]
    }
  },
  image: {
    service: passthroughImageService()
  }
});
