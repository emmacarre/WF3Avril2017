// Chargement de la page du DOM

$(document).ready(function (){

    // Capter le click sur la balise h3

    $('h3').click(function (){

        // Fermer la balise suivant .open
        $('.open').not(this) // sélectionne la balise qui a la class .open sauf celle sur laquelle j'ai cliqué
        .next().slideUp() // sélectionne la balise suivante pour faire un slideUp
        .prev().removeClass('open') // sélectionne la balise précédente pour retirer la class open et fermer le menu 
        .children('.fa').toggleClass('fa-times').toggleClass('fa-arrow-right'); //sélectionne les enfants fa de h3 et change moi la class fa arrow en fa times 

        // Faire un toggle de la class open sur la balise h3
        $(this).toggleClass('open'); 

        // Faire un slideToggle sur la balise suivante
        $(this).next().slideToggle(); 

        // Sélectionner la balise .fa pour supprimer la class fa-arrow-right et un toggle sur la class fa-times
        $(this).children('.fa').toggleClass('fa-arrow-right').toggleClass('fa-times'); 

    });


}); // Fin de la fonction d'attente de chargement du DOM