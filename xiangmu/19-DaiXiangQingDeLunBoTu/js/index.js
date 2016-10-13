window.onload = function(){
	var lis = document.getElementsByTagName('li');
	var divs = document.getElementsByTagName('div');
	var imgs = document.getElementsByTagName('img');
	var uls = document.getElementsByTagName('ul')[0];
	var p = document.getElementsByTagName('p');
	var num = 0;
	var n = 0;
	//初始化
	for(var i=0;i<imgs.length;i++){
		imgs[i].src = 'img/'+i+'.jpg';
	}
	//图片运动
	setInterval(function(){
		mTween(uls,'left',-300*num,500,'linear',function(){
			num++;
			num%=lis.length;
			mTween(p[n],'bottom',0,250,'linear',function(){
				setTimeout(function(){
					mTween(p[n],'bottom',-50,250,'linear',function(){
						n++;
						n%=p.length
					})
				},1000)
			})
		})
	},3000)
}
