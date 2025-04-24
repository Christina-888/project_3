// import { defineConfig } from "vite";


// import { resolve } from "path"

// const pages = [
//   {name: 'main', path: resolve(__dirname, '../index.html')},
//   {name: 'budget', path: resolve(__dirname, '/pages/budget.html')},
//   {name: 'toDoList', path: resolve(__dirname, '/pages/to_do_list.html')},

// ];

// export default pages

import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        budget: resolve(__dirname, "/pages/budget.html"),
        toDoList: resolve(__dirname, "/pages/to_do_list.html"),
      },
    },
  },
});