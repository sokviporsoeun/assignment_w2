const taskList = document.getElementById('taskList');
const addTaskButton = document.getElementById('addTaskButton');
const newTaskInput = document.getElementById('newTaskInput');
const prioritySelect = document.getElementById('prioritySelect');
const filterSelect = document.getElementById('filterSelect');

let tasks = [
  { description: "Task 1", priority: 1 },
  { description: "Task 2", priority: 0 },
  { description: "Task 3", priority: 1 }
];

function displayTasks(tasks) {
  taskList.innerHTML = ''; 

  tasks.forEach(task => {
    const listItem = document.createElement('li');

    const taskDescription = document.createElement('span');
    taskDescription.textContent = task.description;
    listItem.appendChild(taskDescription);

    if (task.priority === 1) {
      listItem.classList.add('high'); 
    } else {
      listItem.classList.add('low');
    }

    taskList.appendChild(listItem);
  });
}

// Function to add a new task
function addTask() {
  const newTaskDescription = newTaskInput.value;
  const newTaskPriority = parseInt(prioritySelect.value);

  if (newTaskDescription) {
    const newTask = {
      description: newTaskDescription,
      priority: newTaskPriority
    };

    tasks.push(newTask);
    displayTasks(tasks); 

    // Clear the input fields
    newTaskInput.value = '';
    prioritySelect.value = '0';
  }
}

addTaskButton.addEventListener('click', addTask);

// Initial display of tasks
displayTasks(tasks);

filterSelect.addEventListener('change', () => {
  const selectedFilter = filterSelect.value;

  if (selectedFilter === 'all') {
    displayTasks(tasks);
  } else if (selectedFilter === 'high') {
    displayTasks(tasks.filter(task => task.priority === 1));
  } else if (selectedFilter === 'low') {
    displayTasks(tasks.filter(task => task.priority === 0));
  }
});