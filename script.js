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
     
      
      // Aquí puedes añadir el código para añadir realmente al carrito
      // Ya sea enviándolo a una API o guardándolo en localStorage
    });
  });
  



  document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.color-circle').forEach(circle => {
      circle.addEventListener('click', function(event) {
        event.preventDefault();     // Evita que el clic siga el enlace
        event.stopPropagation();    // Evita que el clic se propague a elementos padres
  
        const newImage = this.getAttribute('data-image');
        const productCard = this.closest('.product-card');
        const productImage = productCard.querySelector('.product-image');
  
        productImage.style.opacity = '0';
        setTimeout(() => {
          productImage.src = newImage;
          productImage.style.opacity = '1';
        }, 300);
      });
    });
  });
  




//  PRODUCT DETAIL


document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', function(e) {
    // Evitar que el evento se dispare si se hace clic en el botón "Añadir al carrito"
    if (!e.target.classList.contains('add-to-cart')) {
      // Obtener el ID o slug del producto
      const productId = this.getAttribute('data-product-id');
      // Redirigir a la página de detalle
      window.location.href = `product-detail.html?id=${productId}`;
    }
  });
});

// Para los botones "Añadir al carrito" en la vista de grid
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function(e) {
    e.stopPropagation(); // Evitar que se propague al contenedor padre
    // Aquí puedes añadir la lógica para añadir directamente al carrito
    // O redirigir a la página de detalle
    const productId = this.closest('.product-card').getAttribute('data-product-id');
    window.location.href = `product-detail.html?id=${productId}`;
  });
});





// POP UP CARRITO 






// Funciones carrito y pop-up para la gorra personalizada
document.addEventListener('DOMContentLoaded', function() {
  // --- Si tienes icono de carrito, actualiza el contador ---
  function getCarrito() {
    return JSON.parse(localStorage.getItem('carrito')) || [];
  }
  function setCarrito(carrito) {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }
  function actualizarCartCount() {
    if (!document.getElementById('cart-count')) return;
    const carrito = getCarrito();
    const total = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    document.getElementById('cart-count').textContent = total > 0 ? total : '';
  }
  actualizarCartCount();

  // --- Pop-up ---
  function mostrarCartPopup(producto) {
    const popup = document.getElementById('cart-popup');
    const content = document.getElementById('cart-popup-content');
    content.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <div><strong>${producto.nombre}</strong></div>
      <div>Color base: ${producto.colorBase}</div>
      <div>Color estrellas: ${producto.colorEstrellas}</div>
      <div>Precio: ${producto.precio.toFixed(2)} €</div>
    `;
    popup.style.display = 'flex';
  }
  function cerrarCartPopup() {
    document.getElementById('cart-popup').style.display = 'none';
  }
  document.getElementById('seguir-comprando').onclick = cerrarCartPopup;
  document.getElementById('ir-carrito').onclick = function() {
    window.location.href = "carrito.html";
  };
  document.querySelector('.cart-popup-close').onclick = cerrarCartPopup;
  document.getElementById('cart-popup').onclick = function(e) {
    if (e.target === this) cerrarCartPopup();
  };

  // --- Evento botón COMPRAR ---
  document.getElementById('add-to-cart').addEventListener('click', function(e) {
    e.preventDefault();

    // Recoge la selección actual
    const nombre = "GORRA PERSONALIZADA";
    const precio = parseFloat(document.getElementById('price').textContent.replace(',', '.'));
    const imagen = document.getElementById('base-cap').src; // Imagen base de la gorra
    const colorBase = document.querySelector('.color-option.selected').getAttribute('data-color');
    const colorEstrellas = document.querySelector('.star-option.selected').getAttribute('data-color');

    // Crea el objeto producto
    const producto = {
      id: nombre + colorBase + colorEstrellas, // Un id único por combinación
      nombre,
      precio,
      imagen,
      colorBase,
      colorEstrellas,
      cantidad: 1
    };

    // Añade al carrito (sumando cantidad si ya existe)
    let carrito = getCarrito();
    const idx = carrito.findIndex(p => p.id === producto.id);
    if (idx !== -1) {
      carrito[idx].cantidad += 1;
      mostrarCartPopup(carrito[idx]);
    } else {
      carrito.push(producto);
      mostrarCartPopup(producto);
    }
    setCarrito(carrito);
    actualizarCartCount();
  });
});

