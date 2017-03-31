$(document).ready(function(){
	$("#menu-btn").click( function() {
		$("#menu-bl").toggle( function(){
		});
	});

	$("#menu, .btn, .btn-2").on("click", "a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
				top = $(id).offset().top;
		$('body').animate({scrollTop: top}, 800);
	});
});
