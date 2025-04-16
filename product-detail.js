document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el carrusel Swiper
    const swiper = new Swiper('.product-swiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
    
    // Funcionalidad para selección de color
    const colorOptions = document.querySelectorAll('.color-option');
    
    colorOptions.forEach(option => {
      option.addEventListener('click', function() {
        // Eliminar clase selected de todas las opciones
        colorOptions.forEach(opt => opt.classList.remove('selected'));
        
        // Añadir clase selected a la opción clickeada
        this.classList.add('selected');
        
        // Cambiar imagen principal según el color seleccionado
        const imageUrl = this.getAttribute('data-image');
        if (imageUrl) {
          // Si estamos usando un carrusel, cambiamos a la diapositiva correspondiente
          // Esto requeriría que cada slide tenga un atributo data-color
          const slideIndex = Array.from(swiper.slides).findIndex(
            slide => slide.querySelector('img').src.includes(this.getAttribute('data-color'))
          );
          
          if (slideIndex !== -1) {
            swiper.slideTo(slideIndex);
          }
        }
      });
    });
    
    // Funcionalidad para selección de talla
    const sizeButtons = document.querySelectorAll('.size-btn');
    
    sizeButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Eliminar clase selected de todos los botones
        sizeButtons.forEach(btn => btn.classList.remove('selected'));
        
        // Añadir clase selected al botón clickeado
        this.classList.add('selected');
      });
    });
    
    // Funcionalidad para el botón de añadir al carrito
    const addToCartButton = document.querySelector('.add-to-cart-detail');
    
    addToCartButton.addEventListener('click', function() {
      const selectedColor = document.querySelector('.color-option.selected').getAttribute('data-color');
      const selectedSize = document.querySelector('.size-btn.selected').getAttribute('data-size');
      const productTitle = document.querySelector('.product-title').textContent;
      const productPrice = document.querySelector('.product-price').textContent;
      
      // Aquí puedes implementar la lógica para añadir al carrito
      // Por ejemplo, guardar en localStorage o enviar a una API
      
      console.log(`Producto añadido: ${productTitle}, Color: ${selectedColor}, Talla: ${selectedSize}, Precio: ${productPrice}`);
      
      // Mostrar confirmación al usuario
      alert('¡Producto añadido al carrito!');
    });
  });
  