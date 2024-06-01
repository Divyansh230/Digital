document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    function addTask(description) {
        const taskItem = document.createElement('li');
        const taskText = document.createElement('span');
        taskText.textContent = description;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function() {
            editTask(taskItem, taskText);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            deleteTask(taskItem);
        });

        taskItem.appendChild(taskText);
        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    }

    function editTask(taskItem, taskText) {
        const newDescription = prompt('Edit task:', taskText.textContent);
        if (newDescription) {
            taskText.textContent = newDescription;
        }
    }

    function deleteTask(taskItem) {
        taskList.removeChild(taskItem);
    }
});
