const btnMenu = document.getElementById('btnMenu');

let check = false;

function toggleMenu() {
    const headerBox = document.getElementById('headerBox')
    headerBox.classList.toggle('active')

    if (check != null){
        check = !check;
        check ? btnMenu.style.transform = "rotate(180deg)" : btnMenu.style.transform = "rotate(360deg)"
    }
}

btnMenu.addEventListener('click', toggleMenu);

