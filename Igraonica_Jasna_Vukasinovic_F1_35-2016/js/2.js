// JavaScript Document

jQuery(document).ready(function() {	

$("#content").addClass("load");

$(window).scroll(function(){
    if ($(this).scrollTop() > 555) {
        $('.vrh').fadeIn();

    } else {
		
		$('.vrh').fadeOut();
   }
});

$("a#myBtn").click(function(){
            $("html, body").animate({scrollTop: $("#naslov").offset().top }, 1500);
    });



});