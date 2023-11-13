$(document).ready(function(){

    $('#menufloat .listbox').hide();
    $('.menubk').hide();

    $('.bold').mouseenter(function(){
        timer = setTimeout(function() {       
            $(".listbox").not(':animated')      
            .slideDown(500)                     
         }, 100),
         timer = setTimeout(function() {       
            $(".menubk").not(':animated')      
            .slideDown(500)                     
         }, 100)
         timer = setTimeout(function() {       
            $(".MenuContent").not(':animated') 
            .css({background: "white"})                        
         }, 100)
       
    })

    $('.menufloat').mouseleave(function(){
        clearTimeout(timer);         
		$('.listbox').slideUp(500),
        $('.menubk').slideUp(500);
        timer = setTimeout(function() {       
            $(".MenuContent").not(':animated') 
            .css({background: "none"})                        
         }, 500)
	});

})