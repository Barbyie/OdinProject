const container = document.querySelector('#container');
const content = document.createElement('div');

content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redParagraph = document.createElement('p');
redParagraph.classList.add('red');
redParagraph.textContent = "Hey I'm red!";
redParagraph.style.color = 'red';
container.appendChild(redParagraph);

const blueHeader = document.createElement('h3');
blueHeader.classList.add('blue');
blueHeader.style.color = 'blue';
blueHeader.textContent = "I'm a blue h3!";
container.appendChild(blueHeader);

const divBlack = document.createElement('div');
divBlack.classList.add('container2');
divBlack.style.backgroundColor = 'pink';
divBlack.style.border = '2px solid black';
container.appendChild(divBlack);

const innerHeader = document.createElement('h1');
innerHeader.textContent = "I'm in a div";
divBlack.appendChild(innerHeader);

const innerParagraph = document.createElement('p');
innerParagraph.textContent = "ME TOO!";
divBlack.appendChild(innerParagraph);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});
