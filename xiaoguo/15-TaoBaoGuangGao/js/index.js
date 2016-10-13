window.onlad = function(){
	var sections = document.getElementsByTagName('section')[0];
	var lis = sections.getElementsByTagName('li');
	var divs = sections.getElementsByTagName('div');
	var img = sections.getElementsByTagName('img');
	var num = 0//对应图片让图片循环
	var time;//保存定时器的
	var centers = (lis.length/2);//求中间值
	//图片数据组
	var arr = ['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','0.jpg','1.jpg'];
	//初始化背景色和图片
	ff(0);
	//初始化定时器
	fn();
	//给每一个元素添加事件
	for(var i=0;i<lis.length;i++){
		lis[i].index = i;
		//鼠标移入li清除定时器
		lis[i].onmouseover = function(){
			ff(this.index);
			num = this.index;
			
		}
	}
	//鼠标移入模块清除定时器
	sections.onmouseover = function(){
		
		clearInterval(time);
	}
	//鼠标离开模块让定时器重新新运行
	sections.onmouseout = function(){
		fn();
	}
	//让图片和li循环
	function fn(){
		time = setInterval(function(){
			if(num<=centers-1){
				num++;
				if(num==centers){
					num = lis.length;
				}
			}
			if(num>centers-1){
				num--;
				if(num==centers-1){
					num =0
				}
			}
			ff(num);
		},1000);
	}
	//添加图片和li的背景色
	function ff(b){
		img[0].src = './img/'+arr[b];
	//清空li的背景色
	for(var i=0;i<lis.length;i++){
		lis[i].style.background = '';
	}
	lis[b].style.background ='red'; 
	}
}
