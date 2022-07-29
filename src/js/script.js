window.addEventListener("DOMContentLoaded", () => {
    const todoList = document.querySelector(".todolist__list"),
          todoListItem = todoList.querySelectorAll("li"),
          btn = document.querySelectorAll('.btn'),
          pencil = document.querySelector('[data-openAdd]'),
          addText = document.querySelector('.todolist__add'),
          remove = document.querySelectorAll('[data-close]'),
          btnSave = document.querySelector('[data-save]'),
          btnClear = document.querySelector('[data-clear]'),
          btnTips = document.querySelector('[data-tips]'),
          tips = document.querySelector('.todolist__tips');
    
    function addToDo(e) {
        if(e.code === 'Enter') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
            <span data-close class="icon-trash-can-solid"></span>${e.target.value}
            `;
            todoList.append(listItem);
            e.target.value = '';
        }
    }
    
    function checked(elem) {
        if(elem.tagName === "LI") {
            elem.classList.toggle('checked');
        }
    }
    
    function removeToDo(elem) {
        if(elem.hasAttribute('data-close')) {
            elem.parentNode.remove();
            saveTodo();
        }
    }

    function saveTodo() {
         localStorage.setItem('todoList', todoList.innerHTML);
    }

    function loadTodo() {
        const data = localStorage.getItem('todoList');
        if(data) {
            todoList.innerHTML = data;
        }
    }
    loadTodo();

    todoList.addEventListener('click', (e) => {
        const target = e.target;
        removeToDo(target);
        checked(target);
    });

    addText.addEventListener('keydown', addToDo);
    btnSave.addEventListener('click', saveTodo);
    pencil.addEventListener('click', () => {
        addText.classList.toggle('hide');
    });
    btnClear.addEventListener('click', () => {
        todoList.innerHTML = '';
        localStorage.clear();
    });
    btnTips.addEventListener('click', () => {
        tips.classList.toggle('show');
    });
});