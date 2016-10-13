window.onload = function(){
	// 需求：
	// 	1.点击h2兄弟级ul打开,关闭ul其他兄弟级；
	// 	2.点击h2的祖先级点击位置下边所有都关闭
	// 	3.只要添加结构就能无限打开
	var h2s = document.getElementsByTagName('h2');
	for(var i=0;i<h2s.length;i++){
		h2s[i].onclick = function(){
			var ul = this.nextElementSibling;
			var span = this.children[0];

			
			var uls = this.parentNode.parentNode.getElementsByTagName('ul');
			var spans = this.parentNode.parentNode.getElementsByTagName('span');
			
			for(var i=0;i<uls.length;i++){
				if(spans[i]==span)continue;
				uls[i].className = '';
				spans[i].innerHTML ='+'; 
			}
			
			if(!ul){
				return;
			}
			if(span.innerHTML == '+'){
				ul.className = 'active';
				span.innerHTML = '-';
			}else{
				ul.className = 'none';
				span.innerHTML = '+';
			}
		}
	}
}
