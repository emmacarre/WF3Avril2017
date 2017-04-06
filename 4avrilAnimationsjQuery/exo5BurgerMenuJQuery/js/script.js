// Chargement de la page du DOM

$(document).ready(function (){

    // Ouvrir le Burger Menu classique
    $('.fa-bars').click(function(){

        $('nav ul').fadeIn(500);

    }); 

    // Fermer le Burger Menu
    $('a').click(function (evt){

        evt.preventDefault(); 
        $('nav ul').fadeOut(500);

    }); 

}); // Fin de la fonction d'attente de chargement du DOM