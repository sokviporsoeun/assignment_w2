const createButton = document.getElementById('create');
const container = document.querySelector('.container');
//random color (as provided)
const COLORS = ["red", "blue", "green", "yellow", "purple", "orange"];

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
}

function createCard() {
  
  const card = document.createElement('div');
  card.classList.add('card');

  //random background color
  const randomColor = getRandomColor();
  card.style.backgroundColor = randomColor;

  //description
  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent = "Hello!"; 
  card.appendChild(description);

  //card footer
  const cardFooter = document.createElement('div');
  cardFooter.classList.add('card-footer');
  card.appendChild(cardFooter);

  //remove button
  const removeButton = document.createElement('button');
  removeButton.textContent = "Remove Card";
  removeButton.addEventListener('click', () => {
    container.removeChild(card);
  });
  cardFooter.appendChild(removeButton);

  return card;
}

createButton.addEventListener('click', () => {
  const newCard = createCard();
  container.appendChild(newCard);
});