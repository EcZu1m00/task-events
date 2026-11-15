export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';
    button.addEventListener('click', () => {
        button.remove();
    });
    document.body.appendChild(button);
}

export function createArrList(arr) {
    const ul = document.createElement('ul');
    arr.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        li.addEventListener('mouseover', () => {
            li.setAttribute('title', li.textContent);
        });
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
}

export function createLink() {
    const link = document.createElement('a');
    link.href = 'https://tensor.ru/';
    link.textContent = 'tensor';
    let firstClick = true;
    link.addEventListener('click', (event) => {
        if (firstClick) {
            event.preventDefault();
            link.textContent += ` ${link.href}`;
            firstClick = false;
        }
    });
    document.body.appendChild(link);
}

export function createList() {
    const ul = document.createElement('ul');
    const button = document.createElement('button');

    function addItem() {
        const li = document.createElement('li');
        li.textContent = 'Пункт';
        li.addEventListener('click', () => {
            li.textContent += '!';
        });
        ul.appendChild(li);
    }

    button.textContent = 'Добавить пункт';
    addItem();
    button.addEventListener('click', addItem);
    document.body.append(ul, button);
}
