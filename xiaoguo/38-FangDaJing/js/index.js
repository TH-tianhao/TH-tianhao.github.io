window.onload = function(){
	// 显示隐藏left身上的块
	$('#left').hover(function(){
		$('#move,#right').show()
	},function(){
		$('#move,#right').hide()
	})
	$('#left').mousemove(function(ev){
		// 求出右边图片可移动的最大值
		var maxx = $('#right').innerWidth()-$('#right img').outerWidth();
		var maxy = $('#right').innerHeight()-$('#right img').outerHeight();
		// 求出左边可移动的最大范围
		var maxx1 = $('#left').innerWidth()-$('#move').outerWidth();
		var maxy1 = $('#left').innerHeight()-$('#move').outerHeight();
		// 让鼠标移至保持在移动块的中间
		var x = ev.clientX-$('#move').outerWidth()/2
		var y = ev.clientY-$('#move').outerHeight()/2
		// 限制移动范围
		if(x<0){
			x=0;
		}
		if(y<0){
			y=0;
		}
		if(x>maxx1){
			x=maxx1;
		}
		if(y>maxy1){
			y=maxy1;
		}
		// 左边的移动比例
		var xx = x/maxx1;
		var yy = y/maxy1;
		// 赋值
		$('#right img').css({
			left:maxx*xx,
			top:maxy*yy
		})
		$('#move').css({
			left:x,
			top:y
		})
		
	})
}
