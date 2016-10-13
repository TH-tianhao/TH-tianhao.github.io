window.onload = function(){
	var div1 = document.getElementById('div1');
	var obj = {};
	var timer = null;
	var onOff = true;
	function play(){
		timer = setInterval(function(){

			if(obj['37']){
				div1.style.left = div1.offsetLeft - 10+'px';
			}
			if(obj['38']){
				div1.style.top = div1.offsetTop - 10+'px';
			}
			if(obj['39']){
				div1.style.left = div1.offsetLeft + 10+'px';
			}
			if(obj['40']){
				div1.style.top = div1.offsetTop + 10+'px';
			}
		}, 30);
	}
	//按下
	document.onkeydown = function(ev){
		//把对应的键值设为true
		obj[ev.keyCode] = true;
		//用一个变量防止多次开启定时器
		if(!onOff)return;
		onOff = false;
	
		play();
	};
	//抬起
	document.onkeyup = function(ev){
		//如果按键抬起，把对应的键值设为false。
		obj[ev.keyCode] = false;
		//如果有一个键值是true，说明有按键按下，不能清除定时器，否则就清除定时器。 
		for(var i=37;i<=40;i++){
			if(obj[i]){
				return;
			}
		}
		clearInterval(timer);
		onOff = true;
	};
}
