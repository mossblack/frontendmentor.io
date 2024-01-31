const itemsTodo = [];
const todos = document.getElementById('todos');
const textInput = document.getElementById('textInput');
const itemsNumber = document.getElementById('itemsNumber');

const itemsCounter = () => {
    if (itemsTodo.length < 2) {
        itemsNumber.innerText = `${itemsTodo.length} item left`;
    } else {
        itemsNumber.innerText = `${itemsTodo.length} items left`;
    }
}

textInput.onkeydown = event => {
    if (event.key === 'Enter') {
        console.log(itemsTodo);
        if (textInput.value.length > 0) {
            itemsTodo.push(textInput.value);
            let todo = `
            <div id="itemTodo" class="tab">
            <input type="checkbox" name="checkbox" class="checkbox">
            <h2 class="w-full">${textInput.value}</h2>
            <input type="button" class="cross">
            </div>`;
            todos.insertAdjacentHTML('afterbegin', todo);
            textInput.value = '';
            itemsCounter();
        }
    }
}