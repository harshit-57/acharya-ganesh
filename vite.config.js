import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    ssr: {
        noExternal: [
            'react-helmet-async',
            '**/*.css',
            '**/*.scss',
            '**/*.sass',
            'react-insta-stories',
        ],
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: undefined,
            },
        },
        target: 'esnext',
    },
    css: {
        extract: true,
    },
});
