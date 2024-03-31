$(function(){
	//탭 갯수 count
	$('.tabs').each(function () {
		var divide = $(this).find('li').size();
		$(this).find('li').each(function () {
			$(this).css('width', parseFloat(100 / divide) + '%');
		});
	});

	// 달력
	$( function() {
	   $( "#datepicker" ).datepicker();
	} );
})