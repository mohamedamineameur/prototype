import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/prototype/', // <-- important !
  plugins: [
    react(),
    VitePWA({
      base: '/prototype/', // le plugin doit aussi connaître la base
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt'],
      manifest: {
        name: 'Prototype App',
        short_name: 'Prototype',
        start_url: '/prototype/',
        scope: '/prototype/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#317EFB',
        icons: [
          {
            src: '532.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '532.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});