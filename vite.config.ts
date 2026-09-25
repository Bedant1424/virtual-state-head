import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

/**
 * Centralized Base-Path Architecture:
 * 1. Honors explicit VITE_BASE_PATH if provided.
 * 2. In GitHub Actions CI/CD, dynamically derives the repository path (e.g. /virtual-state-head/).
 * 3. Defaults to root '/' for local development (http://localhost:5173/).
 */
const getBasePath = (): string => {
  if (process.env.VITE_BASE_PATH) {
    const p = process.env.VITE_BASE_PATH;
    return p.endsWith('/') ? p : `${p}/`;
  }
  if (process.env.GITHUB_REPOSITORY) {
    const repoName = process.env.GITHUB_REPOSITORY.split('/')[1];
    return `/${repoName}/`;
  }
  return '/';
};

export default defineConfig({
  base: getBasePath(),
  plugins: [
    tailwindcss(),
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    open: false,
  },
});
