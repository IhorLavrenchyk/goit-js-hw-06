const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.createElement('ul');

for (const ingredient of ingredients) {
  const li = document.createElement('li');
  li.textContent = ingredient;
  list.append(li);
  li.classList.add('item');
}

document.body.append(list);
