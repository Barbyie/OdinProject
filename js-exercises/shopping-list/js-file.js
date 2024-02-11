const unList = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  let inputValue = input.value;
  input.value = ''

  const listItem = document.createElement('li');
  const span = document.createElement('span');
  const deleteButton = document.createElement('button');

  listItem.appendChild(span);
  listItem.appendChild(deleteButton);

  span.textContent = inputValue;
  deleteButton.textContent = 'Delete';

  unList.appendChild(listItem);

  deleteButton.addEventListener('click', () => {
    unList.removeChild(listItem);
  })

  input.focus();
  
})
