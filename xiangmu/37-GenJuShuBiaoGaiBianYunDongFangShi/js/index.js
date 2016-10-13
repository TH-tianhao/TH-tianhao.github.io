window.onload = function(){
	var imgs = document.getElementsByTagName('img');
	var ps = document.getElementsByTagName('p');
	var box = document.getElementById('box');
	var num = 0;
	// 保存一个数字来控制是那个图片运动
	var n = 0;
	var len = ps.length;
	// 给img添加图片
	for(var i=0;i<imgs.length;i++){
		num++;
		imgs[i].src = './img/'+num+'.jpg';
	}
	box.onmousedown = function(ev){
		// 记录按下位置
		var disx = ev.clientX
		var disy = ev.clientY
		box.onmouseup = function(ev){
			// 抬起位置减去按下位置
			var x = ev.clientX-disx;
			var y = ev.clientY-disy;
			// 取绝对值是因为 X 和 Y 有负数的时候
			if(Math.abs(x)>Math.abs(y)){
				// x大于0向右移动 小于0向左移动
				if(x>0){
					mtwen('left',500)
				}else{
					mtwen('left',-500)
				}
			}else{
				// y大于0向下移动  y小于0向上移动
				if(y>0){	
					mtwen('top',500)
				}else{
					mtwen('top',-500)
				}
			}
		}
		return false;
	}
	// 在运动结束的时候把left ，top重置回0
	function mtwen(attr,target){
		mTween(ps[n%len],attr,target,500,'linear',function(){
			ps[n%len].style.left = 0;
			ps[n%len].style.top = 0;
			fn(n,'','');
			n++;
			fn(n,'previous','next')
		})
	}
	// 因为需要写两次所以封装了一下
	function fn(ne,class1,class2){
		ps[ne%len].className = class1;
		ps[(ne+1)%len].className = class2;
	}
}
