window.onload = function(){
	//获取元素
	var divs = document.getElementsByTagName('div');
	var img2 = document.querySelectorAll('li>img');
	//返回时间字符串
	function timess(){
		var date = new Date();
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();
		return time =totwo(hours)+totwo(minutes)+totwo(seconds);
	}
	//调用函数
	timess();
	twinkle();
	//初始化每一个图片
	for(var i=0;i<divs.length;i++){
		divs[i].getElementsByTagName('img')[0].src = './img/'+time[i]+'.jpg';
	}
	//开启定时器循环
	setInterval(function(){
		for(var i=0;i<divs.length;i++){
			fn(i);
		}
	},1000);
	function fn(n){
		//调用时间的函数
		timess();
		//调用点闪烁的函数
		twinkle();
		//添加图片滑动运动
		divs[n].getElementsByTagName('img')[1].src = './img/'+time[n]+'.jpg';
		if(divs[n].getElementsByTagName('img')[1].src !=divs[n].getElementsByTagName('img')[0].src){
			mTween(divs[n],'top',-70,300,'linear',function(){
				divs[n].getElementsByTagName('img')[0].src = divs[n].getElementsByTagName('img')[1].src;
				divs[n].style.top = '0px';
			})
		}
		
	}
	//点闪烁 
	function twinkle(){
		for(var i=0;i<img2.length;i++){
			img2[i].src = './img/c.jpg';
		}
		setTimeout(function(){
			for(var i=0;i<img2.length;i++){
				img2[i].src = './img/b.jpg';
			}
		},500)
	}
	
	//补零函数
	function totwo(n){
		return n<10? '0'+n:''+n
	}
}
