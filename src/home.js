const homeTitle = document.createElement("div");
homeTitle.classList.add("home-title");
const homeTitleP = document.createElement("p");
homeTitleP.textContent = "Beary's Breakfast Bar";
homeTitle.appendChild(homeTitleP);

const homeCard1 = document.createElement("div");
homeCard1.classList.add("home-card-1");
const homeCard1_1P = document.createElement("p");
homeCard1_1P.textContent =
  "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
const homeCard1_2P = document.createElement("p");
homeCard1_2P.textContent = "Goldilocks";
homeCard1.append(homeCard1_1P, homeCard1_2P);

const homeCard2 = document.createElement("div");
homeCard2.classList.add("home-card-2");
const homeCard2_1P = document.createElement("p");
homeCard2_1P.textContent = "Hours";
const homeCard2Div = document.createElement("div");
[
  "Sunday: 8am - 8pm",
  "Monday: 6am - 6pm",
  "Tuesday: 6am - 6pm",
  "Wednesday: 6am - 6pm",
  "Thursday: 6am - 10pm",
  "Friday: 6am - 10pm",
  "Saturday: 8am - 10pm",
].map((i) => {
  const p = document.createElement("p");
  p.textContent = i;
  homeCard2Div.appendChild(p);
});
homeCard2.append(homeCard2_1P, homeCard2Div);

const homeCard3 = document.createElement("div");
homeCard3.classList.add("home-card-3");
const homeCard3_1P = document.createElement("p");
homeCard3_1P.textContent = "Location";
const homeCard3_2P = document.createElement("p");
homeCard3_2P.textContent = "123 Forest Drive, Forestville, Maine";
homeCard3.append(homeCard3_1P, homeCard3_2P);

const home = document.createElement("div");
home.classList.add("home");
home.append(homeTitle, homeCard1, homeCard2, homeCard3);

export { home };
