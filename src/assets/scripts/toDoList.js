import '/src/style.scss'

import { setOffsetHeight } from '/src/assets/scripts/setOffsetHeight'

import { initializeModal } from "/src/assets/scripts/modal";

document.addEventListener("DOMContentLoaded", () => {
  initializeModal();
});

import { hideNav } from '/src/assets/scripts/main page/burger'

console.log("todo list");

const taskList = document.getElementById('task-list');
const addBtn = document.getElementById('add-btn');
const clearBtn = document.getElementById('clear-btn');
const updateBtn = document.getElementById('update-btn');

//Обновление страницы при клике на значок:
updateBtn.addEventListener('click', () => {
    location.reload(); 
});

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

//Удаляем выполненные задачи:
function removeCompletedTasks() {
  tasks = tasks.filter(task => !task.completed);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = ''; 
  
  const activeTasks = tasks.filter(task => !task.completed);
  
  //Для создания хронологического порядка:
  activeTasks.sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.time || '00:00'}`);
    const dateB = new Date(`${b.date}T${b.time || '00:00'}`);
    return dateA - dateB;
  });
  
  //Собираем задачи по месяцам:
  const tasksByMonth = {};
  
  activeTasks.forEach(task => {
    const month = new Date(task.date).toLocaleString('en-US', { month: 'long', year: 'numeric' });
    if (!tasksByMonth[month]) {
        tasksByMonth[month] = [];
      }
    tasksByMonth[month].push(task);
    });   
    
  //Сортируем месяцы:
  const sortedMonths = Object.keys(tasksByMonth).sort((a, b) => {
    const dateA = new Date(a + " 1");
    const dateB = new Date(b + " 1");
    return dateA - dateB; 
  });

  //Задачи помещаем в контейнеры (по месяцам):
  sortedMonths.forEach(month => {
    const monthContainer = document.createElement('div');
    monthContainer.className = 'month-container'; // в CSS!!
    const monthHeader = document.createElement('h3');
    monthHeader.className = 'month-header';
    monthHeader.textContent = month;
    monthContainer.appendChild(monthHeader);

  //Сортируем задачи внутри каждого месяца:
  tasksByMonth[month].sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.time || '00:00'}`);
    const dateB = new Date(`${b.date}T${b.time || '00:00'}`);
    return dateA - dateB;
  }); 
  
  tasksByMonth[month].forEach((task, index) => {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item'; // в CSS!!
  
  //Если указано/не указано время:
  let displayTime;
  if (task.time) {
    displayTime = task.time;
    } else {
      displayTime = 'during the day';
  }
  taskItem.textContent = `${task.date} ${displayTime}: ${task.name}`; 
  
  if (task.completed) {
      taskItem.classList.add('completed');
  }

  const originalIndex = tasks.indexOf(task);
  taskItem.addEventListener('click', () => toggleTask(originalIndex, taskItem));
  monthContainer.appendChild(taskItem);
  });
  
taskList.appendChild(monthContainer); 
  });
}
/*  
//Убираем корзину с очисткой задач, когда задач нет:
  if (activeTasks.length > 0) {
      clearBtn.style.display = 'block';
  } else {
      clearBtn.style.display = 'none';
  }
} 
*/

//Вешаем на кнопку:
addBtn.addEventListener('click', (e) => {
  e.preventDefault(); 
  const taskInput = document.getElementById('tasks').value;
  const taskDate = document.getElementById('date').value; 
  const taskTime = document.getElementById('time').value; 

  if (taskInput && taskDate) {
    const newTask = { name: taskInput, completed: false, date: taskDate, time: taskTime };
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    document.getElementById('tasks').value = ''; 
    document.getElementById('date').value = ''; 
    document.getElementById('time').value = ''; 
    renderTasks();
  }
});

  function toggleTask(index, taskItem) {
    tasks[index].completed = !tasks[index].completed; 
    localStorage.setItem('tasks', JSON.stringify(tasks)); //Обновление Local Storage;
  
  //Зачёркиваем выполненную задачу:
    if (tasks[index].completed) {
      taskItem.classList.add('completed'); 
    } else {
      taskItem.classList.remove('completed'); 
    }
  }

//Очистка всех задач:
clearBtn.addEventListener('click', () => {
  tasks = [];
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks();
});

//Вызов ф-ции:
renderTasks();
