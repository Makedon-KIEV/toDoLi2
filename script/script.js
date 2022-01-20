let addMessage = document.querySelector('.message'),
    addButton = document.querySelector('.add'),
    todo = document.querySelector('.todo');

let todoList = [];

if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessage();
}

addButton.addEventListener('click', function() {

    let newTodo = {
        todo: addMessage.value,
        checked: false,
        important: false
    };

    todoList.push(newTodo);
    displayMessage();
    localStorage.setItem('todo', JSON.stringify(todoList));

});

function displayMessage() {
    let displayMessage = '';
    todoList.forEach(function(item, i) {
        displayMessage += `
    <li>
    <input type='checkbox' id='item_${i}' ${item.checked ? 'checked':'000'}>
    <label for='item_${i}' class="${item.important ? 'important' : ''}">${item.todo}</label>
    </li>
    `;
        todo.innerHTML = displayMessage;
    });
}

todo.addEventListener('change', function(event) {

    let forLabel = todo.querySelector('[for=' + event.target.getAttribute('id') + ']');
    let valueLabel = forLabel.innerHTML;

    todoList.forEach(function(item) {
        if (item.todo === valueLabel) {
            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    });
});

todo.addEventListener('contextmenu', function(event) {
        event.preventDefault();
        todoList.forEach(function(item) {
            if (item.todo === event.target.innerHTML) {
                item.important = !item.important;
                displayMessages();
                localStorage.setItem('todo', JSON.stringify(todoList));
            }
        })

    })
    // let addMessage = document.querySelector('.message');
    // let addButton = document.querySelector('.add');
    // let removeButton = document.querySelector('.remove');
    // let doneButton = document.querySelector('.done');
    // let clearButton = document.querySelector('.clear');
    // let todo = document.querySelector('.todo');

// let todoList = [];

// if(localStorage.getItem('todo')) {
//   todoList = JSON.parse(localStorage.getItem('todo'));
//   displayMessages();
// } 

// addButton.addEventListener('click', function() {
//   if(!addMessage.value) return;
//   let newTodo = {
//     todo: addMessage.value,
//     checked: false,
//     important: false
//   };
// todoList.push(newTodo);
// displayMessages();
// localStorage.setItem('todo', JSON.stringify(todoList));
// });

// function displayMessages() {
//   let displayMessage = '';
//   if(todoList.length === 0) todo.innerHTML = '';
//   todoList.forEach(function(item, index) {
//     displayMessage += `
//     <li>
//       <input type='checkbox' id='item_${index}' ${item.checked ? 'checked' : ''}>
//       <label for='item_${index}' class="${item.important ? 'important' : ''}">${item.todo}</label>
//     </li>
//     `;
//     todo.innerHTML = displayMessage;
//   });
// }

// clearButton.addEventListener('click', function(event) {
//    todoList = [];
//    displayMessages();
// localStorage.setItem('todo', JSON.stringify(todoList));