import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import UnoCss from 'unocss/vite';
import presetIcons from '@unocss/preset-icons';
import presetUno from '@unocss/preset-uno';
import presetAttributify from '@unocss/preset-attributify';
import transformerDirective from '@unocss/transformer-directives';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    plugins: [
        UnoCss({
            transformers: [transformerDirective()],
            presets: [
                presetUno(),
                presetAttributify(),
                presetIcons({
                    prefix: 'i-',
                    extraProperties: {
                        display: 'inline-block',
                        'vertical-align': 'middle',
                    },
                }),
            ],
            theme: {
                breakpoints: {
                    mobile: '460px',
                },
            },
        }),
        react(),
        VitePWA({
            selfDestroying: true,
            filename: 'service-worker.js',
            manifestFilename: 'manifest.json',
            devOptions: {
                enabled: true,
            },
        }),
    ],
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@utils': path.resolve(__dirname, 'src/utils'),
        },
    },
});
