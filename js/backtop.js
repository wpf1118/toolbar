define(['jquery','scrollto'],function($,scrollto){
	var BackTop = function(el,opts){
		this.opts = $.extend({},BackTop.DEFAULTS,opts);
		this.$el = $(el);
		this.$el.on('click',$.proxy(this._move,this));
		$(window).on('scroll',$.proxy(this._chkpos,this));
		this.scrollto = new scrollto({
			dest:this.opts.dest,
			speed:this.opts.speed,
		});
		this._chkpos();
	}

	BackTop.DEFAULTS = {
		mode:'move',
		dest:0,
		speed:800,
		pos:$(window).height()
	}

	BackTop.prototype._move = function(){
		if(this.opts.mode === 'move'){
			this.scrollto.move();
		}else{
			this.scrollto.go();
		}
	}
	BackTop.prototype._chkpos = function(){
		console.log($(window).scrollTop())
		if($(window).scrollTop() > this.opts.pos){
			this.$el.fadeIn();
		}else{
			this.$el.fadeOut();
		}
	}

	$.fn.extend({
		backtop:function(opts){
			this.each(function(){
				new BackTop(this,opts);
			})
		}
	})
	return BackTop;
})