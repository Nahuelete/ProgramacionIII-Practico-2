document.querySelector('.toggle_datos').addEventListener('click', function() {
  const seccion = document.querySelector('.seccion-desplegable');
  
  // Alterna la clase 'abierto'
  seccion.classList.toggle('abierto');
  
  // Opcional: Cambia el texto del botón
  if (seccion.classList.contains('abierto')) {
    this.textContent = "Cerrar datos opcionales ↑";
  } else {
    this.textContent = "¿Quieres ayudarnos a mejorar? (Opcional) ↓";
  }
});