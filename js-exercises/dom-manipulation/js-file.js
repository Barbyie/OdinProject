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


