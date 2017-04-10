// Attendre le chargement du DOM

$(document).ready(function(){


// FORMULAIRE

  // Capter la soumission du formulaire
    $('form').submit(function(evt){

        // Bloquer le comportement naturel du formulaire
        evt.preventDefault();

        // Définir les variables globales pour le formulaire
        var userName = $('#userName');
        var userSubject = $('#userSubject');
        var userPhone = $('#userPhone');
        var userMessage = $('#userMessage');
        
        var formScore = 0;

        // Vérifier la taille de userName (min. 1 caractère)
        if( userName.val().length == 0 ){
            // Afficher un message d'erreur 
            console.log('Indiquez votre nom')

        } else{
            console.log('userName OK');
            // Incrémenter formScore
            formScore++;
        };

        // Vérifier que l'utilisateur a bien sélectionné un userSubject
            if( userSubject.val() == 'null' ){
                // Afficher un message d'erreur
                console.log('Choisissez un sujet'); 

            } else{
                console.log( 'userSubject OK' );
                // Incrémenter la valeur de formScore
                formScore++;
            };

        // Vérifier la taille de userPhone (min. 10 chiffres)
        if( userPhone.val() < 10 ){
            //Afficher un message d'erreur 
            console.log('Indiquez votre téléphone');

        }else {
            console.log( 'userPhone OK' );
            // Incrémenter la valeur de formScore
            formScore++; 
        }

        // Vérifier la taille de userMessage (min. 5 caractères)
        if( userMessage.val().length < 4 ){
            // Afficher un message d'erreur dans le label
            console.log('Indiquez votre message'); 

        } else{
            console.log( 'userMessage OK' );
            // Incrémenter formScore
            formScore++;
        };


        // Vérifier la valeur de formScore pour valider le formulaire
        if( formScore == 4 ){
            console.log('Le formulaire est validé !')

            // => Envoyer les données dans le fichier PHP et attendre le réponse du PHP (true/false)
            
            // Le PHP répond true !


            // Vider les champs du formulaire
            $('input:not([type="submit"])').val('');
            $('select').val(''); 
            $('textarea').val('');

            
        };



    });




}); // Fin de la fonction de chargement du DOM