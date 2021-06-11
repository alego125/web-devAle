function esconder(){
    let menuEsconder = document.getElementById('menu');
        menuEsconder.classList.toggle('header__menu-esconder');
    let botonEsconder = document.getElementById('botonCierre');
        botonEsconder.classList.toggle('header__btnceirre-esconder');
}

function salir(){
    let sacarInfo = document.getElementById('salir');
        sacarInfo.classList.toggle('volver');
}