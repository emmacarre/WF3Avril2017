// Chargement de la page du DOM

$(document).ready(function (){

    // Ouvrir la modale
    $('button').click(function (){

        $('section').fadeIn(); 

    });

    // Fermer la modale
    $('.fa').click(function (){
        
        $('section').fadeOut();  

    }); 

    // Capter les touches du clavier
    $(document).keyup( function (evt){

        console.log(evt.keyCode)

        // Fermer la modale si on a cliqué sur Echap (touche 27)

        if( evt.keyCode == 27 ){
            $('section').fadeOut(); 
        }; 

    });


}); // Fin de la fonction d'attente de chargement du DOM