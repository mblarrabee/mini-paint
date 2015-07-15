$(document).ready(function() {
	$('.box').on('mouseenter', function() {
		$(this).addClass(color);
	})

	$('.box').on('dblclick', function() {
		$(this).removeClass(colors);
	})

	$('#reset').on('click', function() {
		$('.box').removeClass(colors);
	})

	var color = 'white';
	var colors = 'white green red blue yellow'

	$('#red').on('mouseenter', function() {
		color = 'red';
	})

	$('#blue').on('mouseenter', function() {
		color = 'blue';
	})

	$('#green').on('mouseenter', function() {
		color = 'green';
	})

	$('#yellow').on('mouseenter', function() {
		color = 'yellow';
	})

	$('#white').on('mouseenter', function() {
		color = 'white';
	})
})