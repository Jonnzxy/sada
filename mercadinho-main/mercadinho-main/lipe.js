// Toggling the menu visibility and the hamburger icon when clicking on the hamburger icon
document.getElementById('menuToggle').addEventListener('click', function() {
    // Alterna a classe 'active' tanto no menu quanto no ícone do hambúrguer
    document.getElementById('menu').classList.toggle('active');
    document.querySelector('.menu-toggle').classList.toggle('active');
});
