// Obtener el botón del menú
var menuBtn = document.querySelector('.menu-btn');

// Obtener el menú principal
var mainMenu = document.querySelector('.main-menu');

// Añadir un evento de clic al botón del menú
menuBtn.addEventListener('click', function() {
	// Agregar o eliminar la clase 'open' del menú principal
	mainMenu.classList.toggle('open');
});
