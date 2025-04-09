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






document.addEventListener('DOMContentLoaded', function() {
    // Elementos
    const baseCap = document.getElementById('base-cap');
    const starsElement = document.getElementById('stars');
    const colorOptions = document.querySelectorAll('.color-option');
    const starOptions = document.querySelectorAll('.star-option');
    const priceElement = document.getElementById('price');
    const addToCartBtn = document.getElementById('add-to-cart');
    
    // Selección inicial
    let selectedBaseColor = 'black';
    let selectedStarsColor = 'red';
    
    // Manejar cambio de color de la gorra
    colorOptions.forEach(option => {
      option.addEventListener('click', function() {
        const color = this.getAttribute('data-color');
        const imageUrl = this.getAttribute('data-image');
        
        // Transición de opacidad
        baseCap.style.opacity = 0;
        
        setTimeout(() => {
          baseCap.src = imageUrl;
          baseCap.style.opacity = 1;
          
          // Actualizar selección
          colorOptions.forEach(opt => opt.classList.remove('selected'));
          this.classList.add('selected');
          selectedBaseColor = color;
          
          // Actualizar precio si es necesario
          updatePrice();
        }, 300);
      });
    });
    
    // Manejar cambio de color de las estrellas
    starOptions.forEach(option => {
      option.addEventListener('click', function() {
        const color = this.getAttribute('data-color');
        const imageUrl = this.getAttribute('data-image');
        
        // Transición de opacidad
        starsElement.style.opacity = 0;
        
        setTimeout(() => {
          starsElement.src = imageUrl;
          starsElement.style.opacity = 1;
          
          // Actualizar selección
          starOptions.forEach(opt => opt.classList.remove('selected'));
          this.classList.add('selected');
          selectedStarsColor = color;
          
          // Actualizar precio si es necesario
          updatePrice();
        }, 300);
      });
    });
    
    // Función para actualizar el precio según las selecciones
    function updatePrice() {
      let basePrice = 25.00;
      
      // Aquí puedes personalizar el precio según las combinaciones
      // Por ejemplo:
      if (selectedStarsColor === 'yellow' && selectedBaseColor === 'black') {
        basePrice += 5.00; // Combinación premium
      }
      
      priceElement.textContent = basePrice.toFixed(2);
    }
    
    // Añadir al carrito
    addToCartBtn.addEventListener('click', function() {
      const product = {
        name: 'Gorra con Estrellas',
        baseColor: selectedBaseColor,
        starsColor: selectedStarsColor,
        price: parseFloat(priceElement.textContent)
      };
      
      console.log('Producto añadido:', product);
      alert(`¡Gorra personalizada añadida al carrito! Base: ${selectedBaseColor}, Estrellas: ${selectedStarsColor}`);
      
      // Aquí puedes añadir el código para añadir realmente al carrito
      // Ya sea enviándolo a una API o guardándolo en localStorage
    });
  });
  




