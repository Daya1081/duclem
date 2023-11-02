/*COLOCAR LINEA DEBAJO DE LA SECCION DE MENU ACTIVA*/
document.querySelector(".bars__menu").addEventListener("click", () => {

    var line1__bars = document.querySelector(".line1__bars-menu");
    var line2__bars = document.querySelector(".line2__bars-menu");
    var line3__bars = document.querySelector(".line3__bars-menu");
    var container__menu = document.querySelector(".menu");
    
        line1__bars.classList.toggle("activeline1__bars-menu");
        line2__bars.classList.toggle("activeline2__bars-menu");
        line3__bars.classList.toggle("activeline3__bars-menu");
    
        container__menu.classList.toggle("menu__active");
        
    });

/*CAMBIAR COLOR DE HEADER AL HACER SCROLL*/
window.onscroll = function(){
    scroll = document.documentElement.scrollTop;
    header = document.querySelector("header");
    if (scroll > 100){
        header.classList.add('header_active');
    }else if (scroll < 100){
        header.classList.remove('header_active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const expandLinks = document.querySelectorAll('.expand-link');
    const slider = document.querySelector('.sliderBlog');
    const prevButton = document.querySelector('.prevButton');
    const nextButton = document.querySelector('.nextButton');
    const cards = document.querySelectorAll('.cardblog');
    const numCardsPerPage = 3; 
    let currentPage = 0;

    /*ACTIVAR CONTROLES SLIDER BLOG*/
    if (cards.length > 3) {
        var slider2 = document.querySelector('.sliderBlog');
        slider2.style.justifyContent = 'unset';
        document.querySelector('.sliderControls').style.display = 'flex';
        var slider3 = document.querySelector('.sliderControls');
        slider3.style.justifyContent = 'space-between';
    }

    // FUNCION PARA AVANZAR SLIDER BLOG
    function nextPage() {
        if (currentPage < Math.ceil(cards.length / numCardsPerPage) - 1) {
            currentPage++;
            updateSlider();
        }
    }

    // FUNCION PARA RETROCEDER SLIDER BLOG
    function prevPage() {
        if (currentPage > 0) {
            currentPage--;
            updateSlider();
        }
    }

    // Función para actualizar la visualización de las tarjetas
    function updateSlider() {
        const start = currentPage * numCardsPerPage;
        const end = start + numCardsPerPage;
        cards.forEach((card, index) => {
            if (index >= start && index < end) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Agregar oyentes de eventos a los botones de control
    prevButton.addEventListener('click', prevPage);
    nextButton.addEventListener('click', nextPage);

    // Mostrar la primera página de tarjetas
    updateSlider();

    // JavaScript para abrir y cerrar el modal
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const closeblog = document.getElementById('closeblog');

    // Función para abrir el modal con contenido del artículo
    function openModal(title, imageUrl, fullContent) {
        modalContent.innerHTML = `
            <span class="closeblog" id="closeblog">&times;</span>
            <div class="titlemodalblog">${title}</div>
            <img src="${imageUrl}" alt="${title}">
            <div style="margin-bottom:4%">${fullContent}</div>
            <a href="#Blog" id="back" class="stylebackblog">Regresar al Blog</a>
        `;
        modal.style.display = 'block';
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Agregar evento al hacer clic en "Leer más" para abrir el modal
    expandLinks.forEach(function(link, index) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const card = this.closest('.cardblog');
            const title = card.querySelector('h3').textContent;
            const imageUrl = card.querySelector('img').src;
            const fullContentElement = card.querySelector('.full-content'); 
            const fullContent = fullContentElement.innerHTML;
            openModal(title, imageUrl, fullContent);
        });
    });

    // CIERRA EL MODAL DEL BLOG AL HACER CLICK EN EL GRIS
    modal.addEventListener('click', closeModal);

    // Agregar evento al hacer clic en "Regresar al Blog"
    modalContent.addEventListener('click', function(event) {
        console.log(event.target.id);
        if (event.target.id === 'back' || event.target.id === 'closeblog') {
            closeModal();
        }
    });
});
