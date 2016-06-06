

$(".navbar-collapse ul li a[href^='#']").on('click', function(e){

	//prevent default anchor click behaviour
	e.preventDefault();

	//store hash
	var hash = this.hash; //kur eshte single page dhe pjesa pas hash

	//animate 

	$('html, body').animate({scrollTop: $(this.hash).offset().top -70}, 700, function(){
		//when done add hash to url
		//default click behaviour 
		window.location.hash = hash;
	});
});


$("a.navbar-brand[href^='#']").on('click', function(e){

	//prevent default anchor click behaviour
	e.preventDefault();

	//store hash
	var hash = this.hash;

	//animate 

	$('html, body').animate({scrollTop: $(this.hash).offset().top -70}, 700, function(){
		//when done add hash to url
		//default click behaviour 
		window.location.hash = hash;
	});
});



$("#back-to-top a[href^='#']").on('click', function(e){

	//prevent default anchor click behaviour
	e.preventDefault();

	//store hash
	var hash = this.hash;

	//animate 

	$('html, body').animate({scrollTop: $(this.hash).offset().top -70}, 2000, function(){
		//when done add hash to url
		//default click behaviour 
		window.location.hash = hash;
	});
});




