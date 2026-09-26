import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

/**
 * Centralized Base-Path Architecture:
 * 1. Honors explicit VITE_BASE_PATH if provided.
 * 2. In GitHub Actions CI/CD, dynamically derives the repository path from GITHUB_REPOSITORY.
 * 3. In production build, defaults to '/virtual-state-head/' for GitHub Pages hosting.
 * 4. Defaults to root '/' for local development (http://localhost:5173/).
 */
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production' || process.env.NODE_ENV === 'production';
  let base = '/';

  if (process.env.VITE_BASE_PATH) {
    base = process.env.VITE_BASE_PATH.endsWith('/')
      ? process.env.VITE_BASE_PATH
      : `${process.env.VITE_BASE_PATH}/`;
  } else if (process.env.GITHUB_REPOSITORY) {
    const repoName = process.env.GITHUB_REPOSITORY.split('/')[1];
    base = `/${repoName}/`;
  } else if (isProd) {
    base = '/virtual-state-head/';
  }

  return {
    base,
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
  };
});
