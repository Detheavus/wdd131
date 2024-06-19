const input = document.querySelector('#favchap');
const button = document.querySelector("button");
const list = document.querySelector('list');

const listItem = document.createElement("listItem");
const deleteButton = document.createElement("button");


list.textContent = input.value;
deleteButton.textContent = '❌';
listItem.append(deleteButton);
listItem.append(list);