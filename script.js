const taskForm = document.getElementById('task-form');
const taskTitle = document.getElementById('task-title');
const taskDescription = document.getElementById('task-description');
const taskDueDate = document.getElementById('task-due-date');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get input values
    const title = taskTitle.value;
    const description = taskDescription.value;
    const dueDate = taskDueDate.value;

    // Create a new task element
    const task = document.createElement('li');
    task.innerHTML = `
        ${title} - ${description} (Due: ${dueDate})
        <div class="actions">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    `;

    // Append the task to the task list
    taskList.appendChild(task);

    // Clear input fields
    taskTitle.value = '';
    taskDescription.value = '';
    taskDueDate.value = '';
});

const menuButton = document.getElementById('menu-button');
const dropdownContent = document.getElementById('dropdown-content');

menuButton.addEventListener('click', () => {
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
});

// Close the dropdown if you click outside the dropdown button
document.addEventListener('click', (e) => {
    if (!menuButton.contains(e.target) && e.target !== menuButton) {
        dropdownContent.style.display = 'none';
    }
});

taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();
    }
});

