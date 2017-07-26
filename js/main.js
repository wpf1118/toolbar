requirejs.config({
	paths:{
		jquery:'jquery.min',
	}
})

requirejs(['jquery','backtop'],function($,backtop){
	$('#div1').height($(window).height());
	$('#div2').height($(window).height());
	$('#div3').height($(window).height());
	// var scroll = new scrollto({
	// 	dest:0,
	// 	speed:800,
	// })
	// $('#backTop').on('click',$.proxy(scroll.move,scroll));

	// new backtop('#backTop',{
	// 	mode:'move',
	// 	dest:0,
	// 	speed:800,
	// 	pos:$(window).height()
	// });

	$('#backTop').backtop({});
})