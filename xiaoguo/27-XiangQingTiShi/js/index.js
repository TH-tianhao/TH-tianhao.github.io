window.onload = function(){
	var spans = document.getElementsByTagName('span');
	var div2 = document.getElementById('div2');
	var div1 = document.getElementById('div1');
	var time;
	for(var i=0;i<spans.length;i++){
		//span鼠标移入
		spans[i].onmouseover = function(){
			//清除定时器
			clearTimeout(time);
			//显示div2
			div2.style.display = 'block';
			//给div2添加内容
			div2.innerHTML = this.getAttribute('c')+'<a href='+this.getAttribute('a')+'>详情</a>';
			//获取span到body的距离
			var left = this.getBoundingClientRect().left;
			
			var top = this.getBoundingClientRect().bottom;
			//获取div1到body的距离
			var maxleft = div1.getBoundingClientRect().right-css(div1,'borderRightWidth');
			var maxtop = div1.getBoundingClientRect().bottom-css(div1,'borderBottomWidth');
			//判断div2是否超出div1超出就改变显示方向
			if(maxleft<left+div2.offsetWidth){
				left=maxleft-div2.offsetWidth;
			}

			if(maxtop<top+div2.offsetHeight){
				console.log(top,div2.offsetHeight,this.offsetHeight)
				top = top-div2.offsetHeight-this.offsetHeight;
			}
			//改变定位方向
			div2.style.left = left+'px';
			div2.style.top = top+'px';
			
		};
		//用延时定时器为的给自己可移动的时间
		spans[i].onmouseout = function(){
			time = setTimeout(function(){
				div2.style.display = 'none';
			},30)
		};
		//清除定时器
		div2.onmouseover = function(){
			clearTimeout(time);
		};
		//开启定时器为的解决在鼠标移入之前可能导致div2关闭
		div2.onmouseout = function(){
			timer = setTimeout(function(){
				div2.style.display = 'none';
			},30)
		};

	}
	function css(obj,attr){
		return parseFloat(getComputedStyle(obj)[attr]);
	}
}
