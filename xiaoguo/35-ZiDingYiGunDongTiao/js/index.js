window.onload = function(){
	var spans = document.getElementsByTagName('span')[0];
	var div1 = document.getElementById('div1');
	var box1= document.getElementById('box1');
	var box = document.getElementById('box');
	spans.onmousedown = function(){
		//计算滚动条鼠标初始位置
		var divy = event.clientY-getPos(spans).top;
		//计算滚动条可移动最大范围值
		var div1y = div1.clientHeight-spans.offsetHeight;
		//计算内容区域可移动的最大范围
		var boxy =  box1.clientHeight-box.offsetHeight;
		document.onmousemove = function(){
			  
			var y = event.clientY-divy;
			if(y<0){
				y = 0;
			}
			if(y>div1y){
				y=div1y
			}
			var y1 = y/div1y;
			spans.style.top= y+'px';	
			box.style.top = y1*boxy+'px';
		}
		document.onmouseup = function(){
			document.onmousemove = null;
			document.onmouseup = null;
		}
		return false;
	}
	//获取属性的函数
	function getPos(obj){
		return obj.getBoundingClientRect();
	}
}
