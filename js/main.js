//Product overlays
$(function(){
	// console.log($(".flex-item"));
	$(".flex-item").on("click", function(){

		$(this).children("span").addClass("show");
		$(".flex-item").not(this).children("span").removeClass("show");

	});

	$(".flex-item span").on("click",function(e){
		e.stopPropagation();
		$(this).removeClass("show");
		// console.log("test");
	});

});


//Drop down menu

$(function(){
	//var bOpen = false;

	$(".nav-handle a").on("click", function(){

		$("#main-nav li").toggleClass("show");

	});
	
	


});
