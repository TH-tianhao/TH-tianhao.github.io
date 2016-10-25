// 选项卡的实现
window.onload = function(){
	var box = document.querySelectorAll('#cent_top')[0];
	var divs = document.querySelectorAll('#cent_top>div');
	var as = document.querySelectorAll('#cent_top>ul a');
	var num = 0;
	var time;
	var maxHeight = window.innerHeight;
	// 初始化轮播图的高度
	box.style.height  = maxHeight+'px';
	// 首页轮播移入 移除
	for(var i=0;i<as.length;i++){
		as[i].index = i;
		as[i].onmouseover = function(){
			for(var i=0;i<divs.length;i++){
				divs[i].style.display = "none";
				as[i].className = '';
			}
			divs[this.index].style.display = "block";
			this.className = 'active';
			num = this.index
			clearInterval(time);
		}
		as[i].onmouseout = function(){
			LB();
		}
	}
	// 初始化
	LB();
	function LB(){
		time=setInterval(function(){
			num++;
			num%=divs.length;
			for(var i=0;i<divs.length;i++){
				divs[i].style.display = "none";
				as[i].className = '';
			}
			divs[num].style.display = "block";
			as[num].className = 'active';	
		},3000)
	}
	// 头部导航
	var nav_box = document.getElementById('nav_box');
	var nav_span = nav_box.getElementsByTagName('span')[0];
	var nav_list = nav_box.getElementsByTagName('li');
	var nav_ul = nav_box.getElementsByTagName('ul')[0];
	// 移入事件不支持冒泡
	nav_box.onmouseleave = function(){
		nav_span.style.transition = '';
		nav_span.style.display = 'none';
		console.log(1);
	}
	for(var i=0;i<nav_list.length;i++){
		nav_list[i].index = i;
		// 移入事件不支持冒泡
		nav_list[i].onmouseenter = function(){
			nav_span.style.display = 'block';
			nav_span.style.left = this.index*this.offsetWidth+13+'px';
			setTimeout(function(){
				nav_span.style.transition = '0.2s';
			},12)
		}
	}
}
	
	
