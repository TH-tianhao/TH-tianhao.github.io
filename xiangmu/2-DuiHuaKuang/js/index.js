window.onload=function(){
	
//	1.点击图片能够循环切换
//	2.点击发送可以让图片加value值输出
//	3.图片1和图片2输出的时候分别在显示框的左右两侧

	var is = document.getElementById('i1');
	var div2 = document.getElementById('div2');
	var as = document.getElementById('a1');
	var inps = document.getElementById('inp');
	var imgs = document.getElementById('img1')
	var onOff = true;
	//设置一个循环开关能让图片切换
	is.onclick = function(){
		if(onOff){
			imgs.src = './img/3.jpg';
			
		}else{
			imgs.src ='./img/2.jpg';
			
		}
		onOff = !onOff;
	};
	//onOff在这的值会根据上边的点击情况自动变更寻找相对应的图片
	as.onclick = function(){
		if(onOff){
			if(inps.value == '')return;
			div2.innerHTML = div2.innerHTML+'<p>'+'<img src="./img/2.jpg"/>'+'<span>'+inps.value+'</span>'+'</p>';
			inps.value = '';
		}else{
			if(inps.value == '')return;
			div2.innerHTML = div2.innerHTML+'<em>'+'<img src="./img/3.jpg"/>'+'<span>'+inps.value+'</span>'+'</em>';
			inps.value = '';
		}
	};
		
}
