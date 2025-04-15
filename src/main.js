import "./style.scss";

import { showPreloader } from "/src/assets/scripts/preloader";
import { initializeModal } from "./assets/scripts/modal.js";

document.addEventListener("DOMContentLoaded", () => {
  initializeModal();
});

// import {setOffsetHeight} from '/src/assets/scripts/offsetHeight'

// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
=======
import { showPreloader } from '/src/assets/scripts/main page/preloader'
import { animateTitle } from '/src/assets/scripts/main page/animateTitle'
import { setOffsetHeight } from '/src/assets/scripts/main page/offsetHeight'
import { clickForward } from '/src/assets/scripts/main page/chartsCarousel'
import { hideNav } from '/src/assets/scripts/main page/burger'

// import { resolve } from 'path'
// import { defineConfig } from "vite"
// import { ViteAliases } from "vite-aliases"
// import legacy from "@vitejs/plugin-legacy"


import pages from '/vite_js/pages.config'

const pagesInput = {};

pages.forEach((page => {pagesInput[page.name] = page.path}));

export default defineConfig({
  build: {
    target: 'es2017',
    outDir: 'build',
    rollupOptions: {
      input: {
        ...pagesInput
      }
    }
  },
  server: {
    port: 3000,
    host:'0.0.0.0',
    hmr: true,
  },
  plugins: [
    ViteAliases(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    })
  ],
})





