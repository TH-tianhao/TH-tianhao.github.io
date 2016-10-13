window.onload = function(){
	var div = document.getElementsByTagName('div');
	div[1].onmousedown=function(){
		var divx = event.clientX-this.offsetLeft; 
		var divy = event.clientY-this.offsetTop;
		document.onmousemove = function(){
			var x = event.clientX-divx;
			var y = event.clientY-divy;
			var maxX = window.innerWidth-div[1].offsetWidth;
			var maxY = window.innerHeight-div[1].offsetHeight;
			//范围限制
			if(x<0){
				x = 0;
			}
			if(y<0){
				y=0;
			}
			if(x>maxX){
				x= maxX;
			}
			if(y>maxY){
				y=maxY;
			}
			if(CollisionTest(div[0],div[1])){
				div[1].style.background = 'yellow';
			}else{
				div[1].style.background = '';
			}
			div[1].style.left = x+'px';
			div[1].style.top = y+'px';
			document.onmouseup = function(){
				document.onmousemove = null;
				document.onmouseup=null;
//				吸附效果
				if(x<100){
					x = 0;
				}
				if(y<20){
					y=0;
				}
				if(x>maxX-100){
					x= maxX;
				}
				if(y>maxY-20){
					y=maxY;
				}
				div[1].style.left = x+'px';
				div[1].style.top = y+'px';
			}
		}
		return false;//阻止默认事件
	}
	//检测碰撞函数
	function CollisionTest(obj1,obj2){
		
		var div1 = getPos(obj1);
		var div2= getPos(obj2);
		//逆向思维判断四个不碰撞的条件剩下的全是能碰撞的
		if(div1.right<div2.left||div1.bottom<div2.top||div1.left>div2.right||div1.top>div2.bottom){
			return false;
		}else{
			return true;
		}
	}
	//获取可视范围的函数
	function getPos(obj){
		return obj.getBoundingClientRect();
	}
}
