import "./base.css";

import { cleanCtn } from "./utils";

import home from "./home";
import menu from "./menu";
import about from "./about";

const content = document.getElementById("content");
content.appendChild(home);

const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const aboutBtn = document.querySelector(".about-btn");

homeBtn.addEventListener("click", changeContent);
menuBtn.addEventListener("click", changeContent);
aboutBtn.addEventListener("click", changeContent);

function changeContent(event) {
  cleanCtn(content);

  if (event.target.textContent === "Home") {
    content.appendChild(home);
  }

  if (event.target.textContent === "Menu") {
    content.appendChild(menu);
  }

  if (event.target.textContent === "About") {
    content.appendChild(about);
  }
}
