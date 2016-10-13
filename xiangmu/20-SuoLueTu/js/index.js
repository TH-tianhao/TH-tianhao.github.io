window.onload = function(){
	var div1 = document.getElementById('div1');
	var div2 = document.getElementById('div2');
	var div3 = document.getElementById('div3');
	var a1 	 = document.getElementById('a1');
	var a2 	 = document.getElementById('a2');
	var as   = document.getElementsByTagName('a');
	var ul1  = document.getElementById('ul1');
	var li1  = ul1.getElementsByTagName('li');
	var img1 = document.getElementById('img1')
	var imgs = ['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg'];
	var num  = 0;
	var arrs = ''; 
	//点击下一个
	a2.onclick = function(){
		num++;
		
		if(num >= imgs.length){
			num = 0;
		}
		listyle(num);
		img1.src = 'img/'+imgs[num];
	};
	//点击上一个
	a1.onclick = function(){
		num--;
		
		if(num< 0){
			num = imgs.length-1;
		}
		listyle();
		img1.src = 'img/'+imgs[num];
	};
	//生成对应图片的li
	for(var i=0;i<imgs.length;i++){
		arrs += '<li style="left:'+i%imgs.length*25+'px;top:0px;"><img src="img/'+imgs[i]+'" alt=""/><div></div></li>';
	};
	//显示生成的li
	ul1.innerHTML = arrs;  
	//求ul的宽度以及负marign值
	ul1.style.width 		= imgs.length*25+'px';
	ul1.style.marginLeft 	= -(imgs.length*25)/2+'px';
	//给生成的li添加与只对应的图片和点击事件
	for(var i=0;i<imgs.length;i++){
		li1[i].index = i;
		li1[0].style.background = 'red';
		li1[i].onclick = function(){
			for(var i=0;i<imgs.length;i++){
				li1[i].className = '';
				li1[i].style.background = '';
			};
			num = this.index;
			img1.src = 'img/'+imgs[this.index];
			this.style.background = 'red';
		};
		li1[i].onmouseover = function(){
			for(i=0;i<imgs.length;i++){
				li1[i].className = ''; 
			}
			this.className = 'show';
		};
		li1[i].onmouseout = function(){
			for(i=0;i<imgs.length;i++){
				li1[i].className = '';
			}
		};
	};
	//清空li的样式     让li的样式对应图片
	function listyle(){
		for(var i=0;i<imgs.length;i++){
			li1[i].style.background = '';
		};
		li1[num].style.background = 'red';
	};
}
