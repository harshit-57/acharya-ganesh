import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: '0.0.0.0',
        strictPort: true,
        allowedHosts: [
            'acharyaganesh.com',
            'www.acharyaganesh.com',
            'localhost',
        ],
    },
    ssr: {
        noExternal: [
            'react-helmet-async',
            '**/*.css',
            '**/*.scss',
            '**/*.sass',
            '@mui/**',
            '@emotion/**',
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
