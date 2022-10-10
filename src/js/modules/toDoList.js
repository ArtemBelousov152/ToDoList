function toDoList() {
    const todoList = document.querySelector(".todolist__list"),
          pencil = document.querySelector('[data-openAdd]'),
          addText = document.querySelector('.todolist__add-wrapper'),
          btnSave = document.querySelector('[data-save]'),
          btnClear = document.querySelector('[data-clear]'),
          btnTips = document.querySelector('[data-tips]'),
          tips = document.querySelector('.todolist__tips'),
          enter = document.querySelector('.todolist__enter');
    
    function addToDo(e) {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target).entries());

        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <span data-close class="icon-trash-can-solid"></span>${formData.text}
        `;
        todoList.append(listItem);
        addText.reset();
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
        console.dir(target);
    });

    addText.addEventListener('submit', addToDo);
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
}

export default toDoList;

