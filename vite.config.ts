import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/musinsa': {
        target: 'https://www.musinsa.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/musinsa/, ''),
      },
      '/zigzag': {
        target: 'https://zigzag.kr',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/zigzag/, ''),
      },
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src/') }],
  },
});
