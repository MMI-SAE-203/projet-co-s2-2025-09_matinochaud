// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import alpinejs from '@astrojs/alpinejs';

import react from '@astrojs/react';
import mod from 'astro/zod';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  output: "server",
  adapter: netlify(),
  experimental: { svg: true, session: true },
  integrations: [alpinejs(), react()]
});