window.onload = function(){
	var div1 = document.getElementById('div1');
	var spans = document.getElementsByTagName('span')[0];
	var box = document.getElementById('box');
	var box1 = document.getElementById('box1');
	var div = document.getElementById('div');
	var num = 0;
	var box1Y = box.clientHeight-box1.offsetHeight;
	var maxY = div1.clientHeight-spans.offsetHeight;
	//拖动滚动条
	spans.onmousedown=function(){
		var spansy = event.clientY-getPos(spans).top; 
		document.onmousemove = function(){
			var y = event.clientY-spansy;
			if(y<0){
				y=0;
			}
			if(y>maxY){
				y=maxY;
			}
			num = y;
			var y1 = y/maxY; 
			spans.style.top = y+'px';
			box1.style.top = y1*box1Y+'px';
		}
		//清空事件防止冲突
		document.onmouseup = function(){
			document.onmousemove = null;
			document.onmouseup = null;
		}
		return false;
	}
	spans.onclick = function(){
		event.cancelBubble = true;
	}
	//点击移动滚动条与内容
	div1.onclick = function(){
		y = event.clientY-spans.offsetHeight;
		num = y;
		if(y<0){
			y=0;
		}
		if(y>maxY){
			y=maxY;
		}
		var y1 = y/maxY;
		spans.style.top = y+'px';
		box1.style.top= y1*box1Y+'px';
	}
	//滚轮事件
	mScroll(div,uppers,downs);
	//滚轮事件向上
	function uppers(){
		num-=10;
		if(num<0){
			num = 0;
		}
		var num1 = num/maxY;
		spans.style.top = num+'px';
		box1.style.top = num1*box1Y+'px';
	}
	//滚轮事件向下
	function downs(){
		num+=10;
		if(num>maxY){
			num = maxY;
		}
		var num1 = num/maxY;
		spans.style.top = num+'px';
		box1.style.top = num1*box1Y+'px';
	}
	//解决fireforx和chrome滚轮事件
	function mScroll(obj,upper,down){
		//fireforx独有的滚轮事件
		obj.addEventListener('DOMMouseScroll', fn, false);
		//chrome和ie的滚轮事件
		obj.onmousewheel = fn;
		function fn(){
			var n;
			if(event.detail){
				n = -event.detail;
			}else{
				n = event.wheelDelta;
			}
			if(n>0){
				upper();
			}else{
				down();
			}
		}
	}
	//获取元素到最外层的可视距离
	function getPos(obj){
		return obj.getBoundingClientRect();
	}
}
