import "./style.scss";


import { setOffsetHeight } from '/src/assets/scripts/setOffsetHeight'
import { showPreloader } from '/src/assets/scripts/main page/preloader'
import { scrollMarginTop } from '/src/assets/scripts/main page/scrollMarginTop'
import { clickForward } from '/src/assets/scripts/main page/chartsCarousel'
import { initializeModal } from "./assets/scripts/modal.js";


import { hideNav } from '/src/assets/scripts/main page/burger'

document.addEventListener("DOMContentLoaded", () => {
  initializeModal();
});

// import { resolve } from 'path'
// import { defineConfig } from "vite"
// import { ViteAliases } from "vite-aliases"
// import legacy from "@vitejs/plugin-legacy"


import pages from '/vite_js/pages.config'

const pagesInput = {};

pages.forEach((page => {pagesInput[page.name] = page.path}));

export default defineConfig({
  build: {
    // target: 'es2017',
    // outDir: 'build',
    rollupOptions: {
      input: {
        ...pagesInput
      }
    }
  },
  // server: {
  //   port: 3000,
  //   host:'0.0.0.0',
  //   hmr: true,
  // },
  // plugins: [
  //   ViteAliases(),
  //   legacy({
  //     targets: ['defaults', 'not IE 11'],
  //   })
  // ],
})





