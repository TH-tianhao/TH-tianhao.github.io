window.onload = function(){
	var lis = $('li');
	var divs = $('div');
	var imgs = divs[0].getElementsByTagName('img');
	var len = imgs[0].length;
	//添加图片
	for(var i=0;i<lis.length;i++){
		var imgs = $('img',lis[i]);
		for(var j=0;j<imgs.length;j++){
			imgs[j].src = './img/'+j+'.jpg';
		}
	}
	//给每一个li添加定时器
	for(var i=0;i<divs.length;i++){
		var len = divs[i].getElementsByTagName('img').length;
		
		divs[i].num = 0;
		divs[i].n = 0;
		fn(divs[i],len)
	}
	//运动函数
	function fn(obj,len){	
		var imgheight = parseFloat(getComputedStyle(imgs[0]).height);
		setTimeout(function(){
			obj.num+=obj.n;
			if(obj.num ==len-1){
				obj.n = -1;
			}
			if(obj.num == 0){
				obj.n = 1;
			}
			mTween(obj,'top',-obj.num*imgheight,300,'linear',function(){
				fn(obj,len);
			})
		},Math.random()*2000+1000);
	}
}
