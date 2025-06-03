const aboutTitle = document.createElement("div");
aboutTitle.classList.add("about-title");
const aboutTitleP = document.createElement("p");
aboutTitleP.textContent = "About";
aboutTitle.appendChild(aboutTitleP);

const aboutCard1 = document.createElement("div");
aboutCard1.classList.add("about-card-1");
const aboutCard1_P1 = document.createElement("p");
aboutCard1_P1.textContent = "Mama Bear";
const aboutCard1Div = document.createElement("div");
["Chef", "555-555-5554", "totallyRealEmail@notFake.com"].map((i) => {
  const p = document.createElement("p");
  p.textContent = i;
  aboutCard1Div.appendChild(p);
});
aboutCard1.append(aboutCard1_P1, aboutCard1Div);

const aboutCard2 = document.createElement("div");
aboutCard2.classList.add("about-card-2");
const aboutCard2_P1 = document.createElement("p");
aboutCard2_P1.textContent = "Papa Bear";
const aboutCard2Div = document.createElement("div");
["Manager", "555-555-5555", "perfectlyRealEmail@notFake.com"].map((i) => {
  const p = document.createElement("p");
  p.textContent = i;
  aboutCard2Div.appendChild(p);
});
aboutCard2.append(aboutCard2_P1, aboutCard2Div);

const aboutCard3 = document.createElement("div");
aboutCard3.classList.add("about-card-3");
const aboutCard3_P1 = document.createElement("p");
aboutCard3_P1.textContent = "Baby Bear";
const aboutCard3Div = document.createElement("div");
["Waiter", "555-555-5556", "totallyRealEmail@notFake.com"].map((i) => {
  const p = document.createElement("p");
  p.textContent = i;
  aboutCard3Div.appendChild(p);
});
aboutCard3.append(aboutCard3_P1, aboutCard3Div);

const about = document.createElement("div");
about.classList.add("about");
about.append(aboutTitle, aboutCard1, aboutCard2, aboutCard3);

export default about;
