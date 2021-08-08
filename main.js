const btnMenu = document.getElementById('btnMenu');

function toggleMenu() {
    const headerBox = document.getElementById('headerBox')
    headerBox.classList.toggle('active')
}

btnMenu.addEventListener('click', toggleMenu);