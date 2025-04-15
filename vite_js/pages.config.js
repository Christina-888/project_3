import { resolve } from "path"

const pages = [
  {name: 'main', path: resolve(__dirname, '../index.html')},
  {name: 'budget', path: resolve(__dirname, '/pages/budget.html')},
  {name: 'toDoList', path: resolve(__dirname, '/pages/to_do_list.html')},

];

export default pages