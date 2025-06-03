const menuTitle = document.createElement("div");
menuTitle.classList.add("menu-title");
const menuTitleP = document.createElement("p");
menuTitleP.textContent = "Menu";
menuTitle.appendChild(menuTitleP);

const beveragesHeader = document.createElement("div");
beveragesHeader.classList.add("beverages-header");
const beveragesHeaderP = document.createElement("p");
beveragesHeaderP.textContent = "Beverages";
beveragesHeader.appendChild(beveragesHeaderP);

const beverage1 = document.createElement("div");
const beverage1_1P = document.createElement("p");
beverage1_1P.textContent = "Honey Tea";
const beverage1_2P = document.createElement("p");
beverage1_2P.textContent =
  "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!";
const beverage1_3P = document.createElement("p");
beverage1_3P.textContent = "$2";
beverage1.append(beverage1_1P, beverage1_2P, beverage1_3P);

const beverage2 = document.createElement("div");
const beverage2_1P = document.createElement("p");
beverage2_1P.textContent = "Beary Tea";
const beverage2_2P = document.createElement("p");
beverage2_2P.textContent =
  "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.";
const beverage2_3P = document.createElement("p");
beverage2_3P.textContent = "$3";
beverage2.append(beverage2_1P, beverage2_2P, beverage2_3P);

const beverage3 = document.createElement("div");
const beverage3_1P = document.createElement("p");
beverage3_1P.textContent = "Toast and Jam";
const beverage3_2P = document.createElement("p");
beverage3_2P.textContent =
  "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.";
const beverage3_3P = document.createElement("p");
beverage3_3P.textContent = "$1";
beverage3.append(beverage3_1P, beverage3_2P, beverage3_3P);

const beveragesDiv = document.createElement("div");
beveragesDiv.classList.add("beverages");
beveragesDiv.append(beverage1, beverage2, beverage3);

const mainDishesHeader = document.createElement("div");
mainDishesHeader.classList.add("main-dishes-header");
const mainDishesHeaderP = document.createElement("p");
mainDishesHeaderP.textContent = "Main Dishes";
mainDishesHeader.appendChild(mainDishesHeaderP);

const dish1 = document.createElement("div");
const dish1_1P = document.createElement("p");
dish1_1P.textContent = "Pancakes";
const dish1_2P = document.createElement("p");
dish1_2P.textContent =
  "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.";
const dish1_3P = document.createElement("p");
dish1_3P.textContent = "$4";
dish1.append(dish1_1P, dish1_2P, dish1_3P);

const dish2 = document.createElement("div");
const dish2_1P = document.createElement("p");
dish2_1P.textContent = "French Toast";
const dish2_2P = document.createElement("p");
dish2_2P.textContent =
  "Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.";
const dish2_3P = document.createElement("p");
dish2_3P.textContent = "$5";
dish2.append(dish2_1P, dish2_2P, dish2_3P);

const dish3 = document.createElement("div");
const dish3_1P = document.createElement("p");
dish3_1P.textContent = "Beary Veggie Sandwich";
const dish3_2P = document.createElement("p");
dish3_2P.textContent =
  "Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.";
const dish3_3P = document.createElement("p");
dish3_3P.textContent = "$6";
dish3.append(dish3_1P, dish3_2P, dish3_3P);

const mainDishesDiv = document.createElement("div");
mainDishesDiv.classList.add("main-dishes");
mainDishesDiv.append(dish1, dish2, dish3);

const menu = document.createElement("div");
menu.classList.add("menu");
menu.append(
  menuTitle,
  beveragesHeader,
  beveragesDiv,
  mainDishesHeader,
  mainDishesDiv,
);

export default menu;
