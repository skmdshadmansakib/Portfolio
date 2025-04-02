import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  base: '/Portfolio/', // Make sure this is set correctly for GitHub Pages
});
