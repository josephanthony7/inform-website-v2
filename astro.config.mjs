import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
output: 'static', // static output with prerendering (Astro 5 default)
adapter: cloudflare({
    mode: 'directory' // Use Workers with static assets
}),
});