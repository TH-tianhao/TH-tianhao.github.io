window.onload=function(){
	var divs = document.getElementsByTagName('div');
	var img2 = document.querySelectorAll('li>img');
	//调用时间
	times();
	//赋值保存time的上一秒
	var time2 = time;
	
	fn();
	//循环定时器
	setInterval(function(){
		fn();
	},1000)
	
	
	function fn(){
		//调用点的闪烁
		twinkle();
		//调用时间
		times();
		
		//给每一个img加上图片
		for(var i=0;i<divs.length;i++){
			divs[i].getElementsByTagName('img')[0].src = './img/'+time[i]+'.jpg';
		}
		
		//判断time那个值不相等就输出time的位置
		for(var i=0;i<divs.length;i++){
			if(time2[i] != time[i]){
				ff(i);
			}
		}
		
		//把time的值的上一秒付给time2
		time2 = time;
		
		//div翻转
		function ff(k){
			
			mTween(divs[k],'width',0,250,'linear',function(){
				divs[k].getElementsByTagName('img')[0].src = './img/'+time[k]+'.jpg';
				mTween(divs[k],'width',50,250,'linear');
			});
			
			mTween(divs[k],'left',25,250,'linear',function(){
				mTween(divs[k],'left',0,250,'linear');
			});
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
		},500);
	}
	//获取时间
	function times(){
		var date = new Date();
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();
		return time = totwo(hours)+totwo(minutes)+totwo(seconds);
	}
	//补零函数
	function totwo(n){
		return n<10? '0'+n:''+n;
	}
			
}
