$(document).ready(function(){
    $('button').click(function(){
        $('img').toggle();
    });
    $('h1').fadeIn(1000);
    $('p').fadeIn(2000);
    
    $('header').click(function(){
        $('header').css("background", "red");
    });
    
    $('fancy-text').click(function(){
       $(this).css("font-style", "italic"); 
    });
}); 



