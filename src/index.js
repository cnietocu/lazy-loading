import { registerImage } from "./lazy";


//Crear una imagen y la vamos a agregar en #imagen
const maximum = 120
const minimum = 1
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

const createImageNode = () => {
    const container = document.createElement('div')
    container.className = 'p-4';

    const imagen = document.createElement('img')
    imagen.className = 'mx-auto'
    imagen.width = '320'
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

    container.appendChild(imagen);

    return container;
};

const nuevaImagen = createImageNode();
const mountNode = document.getElementById('images');

const addButton = document.querySelector('button');

const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
}

addButton.addEventListener('click', addImage);

//limpiar
const clean = document.querySelector("button[type='reset']");
clean.addEventListener("click", () => {
    mountNode.innerHTML = "";
});