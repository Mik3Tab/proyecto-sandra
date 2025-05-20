import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4200',
        changeOrigin: true,
        configure: (proxy, options) => {
          proxy.on('proxyRes', (proxyRes, req, res) => {
            const statusCode = typeof proxyRes.statusCode === 'number' ? proxyRes.statusCode : 500;
            if (statusCode === 200) {
              res.writeHead(200, { 'Content-Type': 'application/json' });
            } else if (statusCode >= 400) {
              res.writeHead(statusCode, { 'Content-Type': 'application/json' });
            }
          });
        }
      }
    }
  }
});