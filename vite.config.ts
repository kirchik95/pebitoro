import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsConfigPaths from 'vite-tsconfig-paths';
import checker from 'vite-plugin-checker';

export default defineConfig({
  css: {
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
  },
  plugins: [
    react(),
    tsConfigPaths(),
    checker({
      overlay: true,
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx, js, jsx}"',
      },
      stylelint: {
        lintCommand: 'stylelint ./src/**/*.{css}',
      },
    }),
  ],
});
