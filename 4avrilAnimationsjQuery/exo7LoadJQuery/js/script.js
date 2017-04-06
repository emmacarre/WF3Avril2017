// Attendre le chargement du DOM
$(document).ready(function (){

    // capter le click sur le prremier bouton
    $('button:first').click(function(){

        // charger le fichier home.html dans le main
        $('main').load('views/home.html')

    }); 

}); 