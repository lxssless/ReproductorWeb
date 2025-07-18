import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import node from "@astrojs/node"; // ya está bien así


export default defineConfig({
  output: "server",
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [svelte(), react(), tailwind()],
  server: {
    host: true, // 👈 muy importante para Render
    port: process.env.PORT ? Number(process.env.PORT) : 4321, // Render provee el puerto por variable de entorno
  }
});
