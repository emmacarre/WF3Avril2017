//Attendre le chargement du DOM
$(document).ready(function(){

    // Fermer la modale
    $('.fa-times').click(function(){
        $('div').fadeOut(); 

    }); 

    // Supprimer les class error
    $('input, select, textarea').focus(function(){
        $(this).removeClass('error');
        
    }); 

    // Capter la soumission du formulaire
    $('form').submit(function(evt){

        // Bloquer le comportement naturel du formulaire
        evt.preventDefault(); 
        
       //Définir les variables globales
       var userName =$('[placeholder="Your Name*"]');
       var userEmail =$('[placeholder="Your Email*"]'); 
       var userSubject =$('select');
       var userMessage =$('textarea'); 

       var formScore = 0; 
        
       
       // Vérifier que l'utilisateur a bien saisi son nom
       if( userName.val().length == 0){
           
           // Ajouter la class error sur l'input
           userName.addClass('error'); 

       } else{
           // Incrémenter la valeur de formScore
           formScore++; 

       }; 

       // Vérifier que l'utilisateur a bien saisi au moins 4 caractères pour le mail
       if( userEmail.val().length < 4 ){
           
           // Ajouter la class error sur l'input
           userEmail.addClass('error'); 

       } else{
           // Incrémenter la valeur de formScore
           formScore++; 
       }; 

       //Vérifier que l'utilisateur a bien choisi un sujet
       if (userSubject.val() == 'null'){
            
            // Ajouter la class error sur l'input
           userSubject.addClass('error'); 

       }else{
           // Incrémenter la valeur de formScore
           formScore++;  

       }; 

       // Vérifier que l'utilisateur a bien saisi au moins 5 caractères dans le message
       if(userMessage.val().length < 5){

            // Ajouter la class error sur l'input
           userMessage.addClass('error');  

       }else {
           // Incrémenter la valeur de formScore
           formScore++; 

       }; 
        
        /* Validation finale du formulaire */
        if(formScore == 4){
            console.log('le formulaire est validé'); 

            //Envoi des données dans le fichier de traitement PHP
            //PHP répond true => continuer le traitement du formulaire 

            // Afficher les données du formulaire dans une modale 
            $('div span').text(userName.val() ); 
            $('div b').text(userSubject.val() ); 
            $('div p:last').text(userMessage.val() ); 

            // Afficher la modale
            $('div').fadeIn(); 

            $('form')[0].reset(); 

        }; 


    }); 






}); // Fin de chargement de la fonction du DOM