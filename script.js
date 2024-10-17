const inputField = document.getElementById('task-input') 
const addButton = document.getElementById('add-task-btn') 
const taskList = document.getElementById('task-list')

const addTask = () => {
    const taskText = inputField.value.trim()

    if (taskText === '') return;  

    const listItem = document.createElement('li')
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'  

    let deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete';

    checkbox.addEventListener('change', () => {
        listItem.classList.toggle('completed', checkbox.checked)
    });
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(listItem) 
    });

    listItem.appendChild(checkbox)
    listItem.appendChild(document.createTextNode(taskText)) 
    listItem.appendChild(deleteButton)
    taskList.appendChild(listItem) 
    inputField.value = '';
};
addButton.addEventListener('click', addTask)

inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();  
});
