import { defineConfig } from 'vite';
import atomico from '@atomico/vite';

export default defineConfig({
  build: {
    target: 'esnext',
  },
  plugins: [atomico()],
});
