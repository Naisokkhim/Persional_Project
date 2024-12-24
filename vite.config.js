import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/Persional_Project/', // Ensure this matches the GitHub Pages URL path
  plugins: [react()],
})
