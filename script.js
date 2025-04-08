document.addEventListener("mousemove", (e) => {
    document.documentElement.style.setProperty("--x", `${e.clientX}px`);
    document.documentElement.style.setProperty("--y", `${e.clientY}px`);
});




document.querySelectorAll('.color-circle').forEach(circle => {
    circle.addEventListener('click', function() {
        const newImage = this.getAttribute('data-image');
        const productImage = this.closest('.product-card').querySelector('.product-image');
        
        // Transición de opacidad antes de cambiar la imagen
        productImage.style.opacity = '0';
        
        setTimeout(() => {
            productImage.src = newImage; // Cambia la imagen del producto
            productImage.style.opacity = '1'; // Vuelve a mostrar la nueva imagen con transición
        }, 500); // Tiempo sincronizado con la duración de la transición
    });
});







