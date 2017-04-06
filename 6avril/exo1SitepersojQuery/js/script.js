// Attendre le chargement du DOM
$(document).ready(function(){

    // Créer une fonction pour les jauges de compétences (animation)
    function mySkills( paramEq, paramWidth ){

        // Animation des balises p des skills 
        $('h3 + ul').children('li').eq(paramEq).find('p').animate( {
            width: paramWidth
        }); 

    }; 
        // Créer une fonction pour ouvrir la modale
        function openModal(){
            
            // Ouvrir la modale au click sur les boutons
            $('button').click(function(){

                console.log( $(this).prev().text() ); 
                alert('test')

                $('#modale').fadeIn();
            }); 

            // Fermer la modale
            $('.fa-times').click(function (){
                $('#modale').fadeOut(); 
            }); 
        }; 

    //Charger le contenu de home.html dans le main 
        $('main').load('views/home.html'); 


/*HomePage */
    // Burger Menu 
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
 

            // Charger la bonne vue puis afficher le main (callBack)
             $('main').load( 'views/' + viewToLoad, function(){

                $('main').fadeIn( function(){

                    // Vérifier si l'utilisateur veut voir la page about.html
                    if( viewToLoad == 'about.html'){

                        // Appeler la fonction mySkills
                        mySkills(0, '84%');
                        mySkills(1, '25%');
                        mySkills(2, '50%');  

                    }; 

                    // Vérifier si l'utilisateur est sur la page portfolio.html
                    if( viewToLoad == 'portfolio.html'){
                        
                        // Appeler la fonction pour ouvrir la modale
                        openModal();
                    }

                }); 

             });
           
        }); 

    });

    


}); //Fin de la fonction de chargement du DOM