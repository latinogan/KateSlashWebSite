const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    // 'active' mostrar/ocultar el menú
    navMenu.classList.toggle('active');
    
    // Opcional: Animación del botón hamburguesa
    hamburger.classList.toggle('is-active');
});

// Cerrar el menú si el usuario hace clic en una opción
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('is-active');
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2 // Se activa cuando el 20% de la imagen/texto es visible
});



// Seleccionamos los elementos a animar
const hiddenElements = document.querySelectorAll('.anim-left, .anim-right');
hiddenElements.forEach((el) => observer.observe(el));



//page spinner
window.addEventListener('load', () => {
    const loader = document.getElementById('loader-wrapper');
    setTimeout(() => {
        loader.classList.add('loader-hidden');
    }, 500);
});
