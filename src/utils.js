export function createHeader(text, clase = "") {
  const div = document.createElement("div");
  const p = document.createElement("p");

  if (clase) div.classList.add(clase);

  p.textContent = text;

  div.appendChild(p);

  return div;
}

export function cleanCtn(ctn) {
  while (ctn.firstChild) ctn.removeChild(ctn.firstChild);
}
