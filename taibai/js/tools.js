// 滚轮事件
var mScroll=function(obj,upper,down){
	obj.addEventListener('DOMMouseScroll', fn, false);
	obj.onmousewheel  = fn;
	function fn(ev){
		var n;
		/*
			负数代表向下
			正数是向上
			n就是这个数字
		*/
		if(ev.detail){
			//firefox
			n = -ev.detail;
		}else{
			//ie和chrome
			n = ev.wheelDelta;
		}
		//n小于0向下滚动，否则向上。
		if(n<0){
			down();
		}else{
			upper();
		}
	}
}
//left，top值 iR半径，degs度数
var deg = function(iR,degs){
	return {left:Math.round(Math.sin(degs/180*Math.PI)*iR),top:Math.round(Math.cos(degs/180*Math.PI)*iR)}
}
// transform end事件
function addEnd(obj,fn)
{
	obj.addEventListener('WebkitTransitionEnd',fn,false);
	obj.addEventListener('transitionend',fn,false);
}
// transform 清除end事件
function removeEnd(obj,fn)
{
	obj.removeEventListener('WebkitTransitionEnd',fn,false);
	obj.removeEventListener('transitionend',fn,false);
}