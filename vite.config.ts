import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Resource-Policy': 'same-origin'
    },
    cors: false,
    origin: 'http://localhost:4200',
    hmr: {
      clientPort: 4200
    }
  },
  build: {
    target: 'esnext',
    sourcemap: false
  }
});