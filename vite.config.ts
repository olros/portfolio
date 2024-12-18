import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        sanntid: './personvern/sanntid.html',
        personvern: './personvern.html',
        '404': './404.html',
      },
    },
  },
});
