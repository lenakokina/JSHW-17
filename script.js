
let arrFoto = [];

let img = document.getElementById('images');

function fetchFoto() {
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
    .then((resp) => {resp.json()
    .then((data) => arrFoto = data)
    .then(renderFotos);
    });
  }

function renderFotos() {
   arrFoto.forEach((el) => renderFoto(el));
 }

function renderFoto(foto) {
  img.innerHTML += `
  <li>
  <img src="${foto.thumbnailUrl}">
  </li>
  `
}

fetchFoto()


