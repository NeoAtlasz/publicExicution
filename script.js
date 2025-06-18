addEventListener('DOMContentLoaded', () => {
const btn = document.createElement('btn');
btn.textContent = 'Add Item';
document.body.appendChild(btn);

let i = 0;
btn.addEventListener('click', () => {
    console.log('Button clicked');
    let entry = document.createElement('li');
entry.textContent = i;
i++;
list.appendChild(entry);
entry.addEventListener('click', () => {
    console.log('Item clicked', entry.textContent);
    entry.remove();

});

});

const list = document.createElement('ul');
document.body.appendChild(list);

const entry = document.createElement('li');
entry.textContent = 'New Item';
list.appendChild(entry);

});


