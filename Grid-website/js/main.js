const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav-mobile--active');
};

navBtn.addEventListener('click', handleNav);

const handleCurrentYear = () => {
    const year = new Date().getFullYear();
    footerYear.innerText = year;
};

handleCurrentYear();

// Pobierz wszystkie linki w nawigacji
const navLinks = document.querySelectorAll('.nav__link');

// Dodaj obsługę zdarzenia na kliknięcie linku
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        // Usuń klasę aktywną z nawigacji, aby ją zamknąć
        navMobile.classList.remove('nav-mobile--active');
    });
});

// Pobierz przycisk zamykający nawigację i dodaj obsługę zdarzenia
const closeNavButton = document.getElementById('close-nav-button');
closeNavButton.addEventListener('click', () => {
    navMobile.classList.remove('nav-mobile--active');
});
