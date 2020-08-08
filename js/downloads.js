$("document").ready(function(){
	
	$("#downloads > li > div").click(function(){
 
		if(false == $(this).next().is(':visible')) {
			$('#downloads ul').slideUp(200);
		}
		$(this).next().slideToggle(200);
	});
});