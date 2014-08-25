//Product overlays
$(function(){
	// console.log($(".flex-item"));
	$(".flex-item").on("click", function(){

		$(this).children("span").addClass("show");

	});

	$(".flex-item span").on("click",function(e){
		e.stopPropagation();
		$(this).removeClass("show");
		// console.log("test");
	});

});
//Controlling what is clicked on and what is not
// $(".flex-item span").hide();
//close other opened items
// $(".flex-item span").on("click",function(){
// 	$(".flex-item span").not(this).next().slideUp(function(){
// 		$(this).prev().find("span").removeClass("show").addClass("show");
// 		$(this).prev().data("open",0);	

// 	});
//Controlling the item being clicked on.
// if($(this).data("open")==1){
// 	$(this).next().slideUp(function(){

// 		$(this).prev().find("span").removeClass("show")
// 		.addClass("show");
// 		$(this).prev().data("open",0);
// 	});

// }else{
// 	$(this).next().slideDown(function(){

// 		$(this).prev().find("span").removeClass("show")
// 		.addClass("span");
// 		$(this).prev().data("open",1);
// 	});
// }

// });






//Drop down menu

$(function(){
	var bOpen = false;

	$(".nav-handle a").on("click", function(){
		//close nav bar
		if(bOpen == true){
		$("#main-nav").animate({height:"0em", width: "0em"},1000,function(){
			$("#main-nav li").removeClass("show")
										.addClass("show");
			bOpen = false;
		});
		//open nav bar
	}else{
		$("#main-nav").animate("slow", function(){
					//do this after animation has completed
					$("#main-nav li").removeClass("show")
										.addClass("show");

					bOpen = true;					
				});
			}

	});
	
	


});
