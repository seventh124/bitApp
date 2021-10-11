var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
    overlay = document.getElementById('overlay'),
    popupp = document.getElementById('popup'),
    btnCerrarPopup= document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener ('click', function(){
    overlay.classList.add('active');
    popupp.classList.add('active');
});

btnCerrarPopup.addEventListener ('click', function(){
    overlay.classList.remove('active');
    popupp.classList.remove('active');
});

