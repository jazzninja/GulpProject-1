/*function splashPage() {
	$("splash-page").fadeIn(400);
	$( "splash-page" ).click(function() {
		$( "splash-page" ).fadeOut(500);
});*/

$(document).ready(function() {
	$(".project-box.episode-1").mouseenter(function(){
		$(".podcast-icon-black1").hide();
		$(".podcast-icon-white1").show();	})
	$(".project-box.episode-1").mouseleave(function(){
		$(".podcast-icon-black1").show();
		$(".podcast-icon-white1").hide();
	})
	$(".project-box.episode-2").mouseenter(function(){
		$(".podcast-icon-black2").hide();
		$(".podcast-icon-white2").show();	})
	$(".project-box.episode-2").mouseleave(function(){
		$(".podcast-icon-black2").show();
		$(".podcast-icon-white2").hide();
	})
	$(".project-box.episode-3").mouseenter(function(){
		$(".podcast-icon-black3").hide();
		$(".podcast-icon-white3").show();	})
	$(".project-box.episode-3").mouseleave(function(){
		$(".podcast-icon-black3").show();
		$(".podcast-icon-white3").hide();
	})

	


});