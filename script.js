document.addEventListener("DOMContentLoaded", () => {
    
    // 1. LÓGICA DEL MENÚ RESPONSIVO (HAMBURGUESA)
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Cerrar menú móvil al hacer clic en cualquier enlace
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. TRANSICIÓN SUAVE ENTRE PÁGINAS
    const pageLinks = document.querySelectorAll('.transition-link');

    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetUrl = this.href;
            
            document.body.classList.remove('fade-in');
            document.body.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = targetUrl;
            }, 400); 
        });
    });

    // 3. FORMULARIO A WHATSAPP
    const waForm = document.getElementById('wa-form');
    
    if (waForm) {
        waForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('wa-name').value;
            const phone = document.getElementById('wa-phone').value;
            const email = document.getElementById('wa-email').value;
            const date = document.getElementById('wa-date').value;
            const time = document.getElementById('wa-time').value;

            const whatsappNumber = "16023502814"; 

            const message = `Hola Baja Boys Towing, me gustaría reservar un servicio:%0A%0A` +
                            `*Nombre:* ${name}%0A` +
                            `*Teléfono:* ${phone}%0A` +
                            `*Email:* ${email}%0A` +
                            `*Fecha requerida:* ${date}%0A` +
                            `*Hora:* ${time}%0A%0A` +
                            `Por favor, confírmenme disponibilidad.`;

            const waURL = `https://wa.me/${whatsappNumber}?text=${message}`;
            window.open(waURL, '_blank');
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const galleryItems = document.querySelectorAll(".gallery-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Remover clase active del botón actual y ponérsela al nuevo
            document.querySelector(".filter-btn.active").classList.remove("active");
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");

            galleryItems.forEach(item => {
                if (filterValue === "all" || item.getAttribute("data-category") === filterValue) {
                    item.classList.remove("hide");
                } else {
                    item.classList.add("hide");
                }
            });
        });
    });
});