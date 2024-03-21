// Get the container
const container = document.getElementById('container');

// Create and style the <p>
const pElement = document.createElement('p');
pElement.textContent = "Hey I'm red!";
pElement.style.color = 'red';

// Create and style the <h3>
const h3Element = document.createElement('h3');
h3Element.textContent = "I'm a blue h3!";
h3Element.style.color = 'blue';

// Create the <div>
const divElement = document.createElement('div');
divElement.style.border = '2px solid black';
divElement.style.backgroundColor = 'pink';

// Create and append <h1> to the <div>
const h1InsideDivElement = document.createElement('h1');
h1InsideDivElement.textContent = "I'm in a div";

// Create and append <p> to the <div>
const pInsideDivElement = document.createElement('p');
pInsideDivElement.textContent = "ME TOO!";

// Append <h1> and <p> to <div>
divElement.appendChild(h1InsideDivElement);
divElement.appendChild(pInsideDivElement);

// Append all elements to the container
container.appendChild(pElement);
container.appendChild(h3Element);
container.appendChild(divElement);
