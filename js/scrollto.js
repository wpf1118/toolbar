define(['jquery'],function($){
	var ScrollTo = function(opts){
		this.opts = $.extend({},ScrollTo.DEFAULT,opts);
		this.$el = $('html,body');
	}
	ScrollTo.prototype.move = function(){
		if($(window).scrollTop() > this.opts.dest && (!this.$el.is(':animated'))){
			this.$el.animate({
				scrollTop:this.opts.dest
			},this.opts.speed);
		}
	}
	ScrollTo.prototype.go = function(){
		this.$el.scrollTop(this.opts.dest);
	}
	ScrollTo.DEFAULT = {
		speed:800,
		dest:0,
	}

	return ScrollTo;
});