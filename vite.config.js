import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const root = (file) => fileURLToPath(new URL(file, import.meta.url))

/** Cada laboratório do Tailwind Play é uma página própria (HTML puro). */
const lab = (file) => root(`./tailwind-play/${file}`)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        board: root('./index.html'),
        play: lab('index.html'),
        'play-01': lab('01-profile-card.html'),
        'play-02': lab('02-product-grid.html'),
        'play-03': lab('03-theme-lab.html'),
        'play-04': lab('04-login-form.html'),
        'play-05': lab('05-pricing-cards.html'),
        'play-06': lab('06-settings-toggle.html'),
        'play-07': lab('07-faq-accordion.html'),
        'play-08': lab('08-dashboard-summary.html'),
        'play-09': lab('09-theme-toggle.html'),
      },
    },
  },
})
