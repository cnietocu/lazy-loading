

const isIntersecting = (entry) => {
    return entry.isIntersecting;
};

const loadImage = (entry) => {
    const container = entry.target; // container (DIV)
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    // Le decimos al navegador que cargue la imagen
    imagen.src = url;
    // Desregistrar la imagen (unlisten)
    observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage)
});


export const registerImage = (imagen) => {
    // Intersection observer -> observer (imagen)
    observer.observe(imagen)
};