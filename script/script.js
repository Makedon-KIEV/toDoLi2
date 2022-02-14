let addMessage = document.querySelector('.message'),
    addButton = document.querySelector('.add'),
    todo = document.querySelector('.todo'),
    removeButton = document.querySelector('.remove');

let todoList = [];

if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
    displayMessage();
}

addButton.addEventListener('click', function() {
    if (!addMessage.value) return;

    let newTodo = {
        todo: addMessage.value,
        checked: false,
        important: false
    };

    todoList.push(newTodo);
    displayMessage();
    localStorage.setItem('todo', JSON.stringify(todoList));
    addMessage.value = '';

});

function displayMessage() {
    let displayMessage = '';
    todoList.forEach(function(item, i) {
        displayMessage += `
    <li>
    <input type='checkbox' id='item_${i}' ${item.checked ? 'checked':''}>
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
    todoList.forEach(function(item, i) {
        if (item.todo === event.target.innerHTML) {
            if (event.controlKey || event.shiftKay) {
                todoList.splice(i, 1);
            } else {
                item.important = !item.important;
            }
            displayMessages();
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    })

})

//Button remove
removeButton.addEventListener('click', function() {
    localStorage.setItem('todo', JSON.stringify(todoList));
    addMessage.value = '';
});

var array = []
var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value)
}
// Button delete
// removeButton.addEventListener('click', function() {

//     let newTodo = {
//         todo: addMessage.value,
//         checked: false,
//         important: false
//     };

//     todoList.splice(newTodo);
//     displayMessage();
//     localStorage.setItem('todo', JSON.stringify(todoList));

// });




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