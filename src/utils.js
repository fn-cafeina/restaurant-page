export function cleanCtn(ctn) {
  while (ctn.firstChild) ctn.removeChild(ctn.firstChild);
}
