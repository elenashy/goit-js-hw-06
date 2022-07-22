const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUl = document.querySelector("#ingredients")


const newIngredients = ingredients.map(ingredient => {
  const ingrElem = document.createElement("li");
  ingrElem.textContent = ingredient;
  ingrElem.classList.add("item");
  
  return ingrElem;
})

  console.log(newIngredients)

  ingredientsUl.append(...newIngredients)


