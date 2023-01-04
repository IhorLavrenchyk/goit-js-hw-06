const numberOfCategories = document.querySelectorAll(`.item`);
console.log(`Number of categories:`, numberOfCategories.length);

numberOfCategories.forEach(categori => {
  const title = categori.firstElementChild.textContent;
  const elements = categori.lastElementChild.children.length;
  console.log(`Category:`, title);
  console.log(`Element:`, elements);
});
