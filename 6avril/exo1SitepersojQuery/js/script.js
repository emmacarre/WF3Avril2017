// Attendre le chargement du DOM
$(document).ready(function(){

    /*JAUGES DE COMPETENCE */ 
    // Créer une fonction pour les jauges de compétences (animation)
    function mySkills( paramEq, paramWidth ){

        // Animation des balises p des skills 
        $('h3 + ul').children('li').eq(paramEq).find('p').animate( {
            width: paramWidth
        }); 

    }; 

    /* MODALE */
        // Créer une fonction pour ouvrir la modale
        function openModal(){
            
            // Ouvrir la modale au click sur les boutons
            $('button').click(function(){

                // Afficher le titre du projet

                var modaleTitle = $(this).prev().text()
                $('#modale span').text( modaleTitle ); 

                /* Afficher l'image du projet (en captant le figcaption 'parent' puis l'image) 
                avec le bon alt pour chaque image dans la modale */

                var modaleImage = $(this).parent().prev().attr('src') 
                $('#modale img').attr('src', modaleImage ).attr('alt', modaleTitle); 

                $('#modale').fadeIn();
            }); 

            // Fermer la modale
            $('.fa-times').click(function (){
                $('#modale').fadeOut(); 
            }); 
        }; 

    /* FORMULAIRE */

        // Créer une fonction pour la gestion du FORMULAIRE
        function contactForm(){

            // Capter le focus sur les input et textarea
            $('input:not([type="submit"]), textarea').focus(function(){

                // Sélectionner la balise précédente pour y ajouter la class openedLabel
                $(this).prev().addClass('openedLabel hideError'); 
            }); 

                // Capter le blur sur les input et le textarea
                $('input, textarea').blur(function(){

                    // Vérifier s'il n'y a pas de caractères dans le input
                    if( $(this).val().length == 0 ){

                    // Sélectionner la balise précédente pour supprimer la class openedLabel
                    $(this).prev().removeClass(); 

                    }; 

                });

                // Supprimer le message d'erreur du select
                $('select').focus(function(){

                    $(this).prev().removeClass(); 
                    $(this).prev().addClass('hideError'); 
                
                });

                //  Supprimer le message d'erreur de la checkbox
                $('[type=checkbox]').focus(function(){

                    $('form p').addClass('hideError'); 

                }); 

                 // Fermer la modale
                        $('.fa-times').click(function (){
                            $('#modale').fadeOut(); 
                }); 
                
                // Capter la soumission du formulaire
                $('form').submit(function(evt){

                    // Bloquer le comportement naturel du formulaire
                    evt.preventDefault(); 

                    // Définir les variables globales du formulaire
                    var userName = $('#userName');
                    var userEmail = $('#userEmail');
                    var userSubject = $('#userSubject');
                    var userMessage = $('#userMessage');
                    var checkbox = $('[type="checkbox"]');
                    var formScore = 0;  
                

                    // Vérifier que userName a au minimum 2 caractères
                    if( userName.val().length < 2 ){
                        
                        // Afficher un message d'erreur 
                        userName.prev().children('b').text('Min 2 caractères');  
                        // ou $('[for="userName"] b').text('Min 2 caractères')

                    }else{
                        //  Incrémenter la valeur de formScore
                        formScore++; 
                    }; 

                    // Vérifier que userEmail a au minimum 5 caractères
                    if( userEmail.val().length < 5 ){

                        // Afficher un message d'erreur 
                         userEmail.prev().children('b').text('Min 5 caractères'); 

                    }else{
                        //  Incrémenter la valeur de formScore
                        formScore++;  
                    }; 

                    // Vérifier que l'utilisateur a bien choisi un userSubject
                    if( userSubject.val() == 'null'){
                        
                        // Afficher un message d'erreur 
                        userSubject.prev().children('b').text('Sujet obligatoire'); 

                    }else{
                        //  Incrémenter la valeur de formScore
                        formScore++;  
                    }; 

                    // Vérifier s'il y a au moins 5 caractères dans userMessage
                    if( userMessage.val().length < 5 ){

                        // Afficher un message d'erreur 
                        userMessage.prev().children('b').text('Min 5 caractères'); 

                    }else{
                        //  Incrémenter la valeur de formScore
                        formScore++;  
                    }; 

                    // Vérifier si la checkbox est cochée 
                    if( checkbox[0].checked == false ){

                        // Afficher un message d'erreur 
                        $('form p b').text('Vous devez accepter les CG'); 

                    }else{
                        //  Incrémenter la valeur de formScore
                        formScore++; 
                    }; 

                    // Validation finale du formulaire
                    if( formScore == 5){
                        
                        console.log('Le formulaire est validé')

                        // Envoi des données dans le fichier de traitement PHP
                        // PHP répond true => continuer le traitement du formulaire 

                        // Ajouter la valeur de userName dans la balise h2 span de la modale
                        $('#modale span').text(userName.val() ); 

                        // Afficher la modale
                        $('#modale').fadeIn(); 


                            // Vider les champs du formulaire 
                            $('form')[0].reset(); //Ou $(this)[0].reset(); 

                            // Supprimer les messages d'erreur
                            $('form b').text(''); 

                            // Replacer les labels
                            $('label').removeClass(); 

                    };  

              }); 
        }; 

    //Charger le contenu de home.html dans le main 
        $('main').load('views/home.html'); 


/* HOMEPAGE */

    // BURGER MENU 
        $('h1 + a').click( function(evt){

            // Bloquer le comportement naturel de la balise a 
            evt.preventDefault(); 

            // Appliquer la fonction slideToggle sur la nav 
            $('nav').slideToggle(); 

        }); 

        // Burger menu navigation
        $('nav a').click(function(evt){

            // Bloquer le comportement naturel de la balise a 
            evt.preventDefault(); 

            // Masquer le main 
            $('main').fadeOut(); 

            // Créer une variable pour récupérer la valeur de l'attribut href 
            var viewToLoad = $(this).attr('href');

            // Fermer le burger menu
            $('nav').slideUp(function(){
 

        // CHARGER LES PAGES DE VIEWS AU CLICK DANS LA NAV 

            // Charger la bonne vue puis afficher le main correspondant (callBack)
             $('main').load( 'views/' + viewToLoad, function(){

                $('main').fadeIn( function(){

                    // Vérifier si l'utilisateur veut voir la page about.html
                    if( viewToLoad == 'about.html'){

                        // Déclencher  la fonction mySkills
                        mySkills(0, '84%');
                        mySkills(1, '25%');
                        mySkills(2, '50%');  

                    }; 

                    // Vérifier si l'utilisateur est sur la page portfolio.html
                    if( viewToLoad == 'portfolio.html'){
                        
                        // Déclencher la fonction pour ouvrir la modale
                        openModal();
                    }; 

                    // Vérifier si l'utilisateur est sur la page contacts.html
                    if( viewToLoad == 'contacts.html'){

                        // Déclencher la fonction de gestion du formulaire
                        contactForm(); 
                   
                     }; 

                }); 

                    

             });
           
        }); 

    });

    


}); //Fin de la fonction de chargement du DOM