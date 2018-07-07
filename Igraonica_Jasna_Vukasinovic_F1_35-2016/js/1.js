// JavaScript Document

jQuery(document).ready(function() {	

$("#content").addClass("load");


$(window).on("scroll", function() {
	if($(window).scrollTop() > 555) {
        $(".head").addClass("active");
    } 
	
	else {
		$(".head").removeClass("active");

	      }
});

$(window).scroll(function(){
    if ($(this).scrollTop() > 555) {
		$('.logo').fadeIn();
        $('.vrh').fadeIn();

    } 
	
	else {
		$('.logo').fadeOut();
		$('.vrh').fadeOut();
    }
});

$("a#myBtn").click(function(){
            $("html, body").animate({scrollTop: $("#naslov").offset().top }, 1000);
    });


});