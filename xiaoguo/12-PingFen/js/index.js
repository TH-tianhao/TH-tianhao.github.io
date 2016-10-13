window.onload= function(){
	var spans = document.getElementsByTagName('span');
	var n;
	for(var i=0;i<spans.length;i++){
		//索引：引用span的数值
		spans[i].index = i;
		//鼠标移入先清空 改变背景色
		spans[i].onmouseover = function(){
			ss(this.index);
		}
		//鼠标移出先清空 ，并改变背景色并保留   点击数值
		spans[i].onmouseout = function(){
			ss(n);
			
		}
		//点击获取点击位置返还给移出那让鼠标移出并保留下背景色
		spans[i].onclick = function(){
			n = this.index;
		}
	}
	//添加鼠标移入,鼠标移出保留点击的背景色
	function ss(s){
		//清空每一个背景色
		for(var i=0;i<spans.length;i++){
			spans[i].style.color = '';
		}
		if(s<2){
			for(var j=0;j<=s;j++){
				spans[j].style.color = 'yellow';
			}
		}else{
			for(var j=0;j<=s;j++){
				spans[j].style.color = 'red';
			}
		}
	}
}
