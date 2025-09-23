import { defineConfig, passthroughImageService } from 'astro/config';
import solid from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [solid(), tailwind(), mdx()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  image: {
    service: passthroughImageService()
  }
});