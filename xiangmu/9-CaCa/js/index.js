window.onload = function(){
	var divs = document.getElementsByTagName('div')[0];
	var uls = divs.getElementsByTagName('ul')[0];
	var lis = divs.getElementsByTagName('li');
	var str = '<ul>美女';
	for(var i=0;i<100;i++){
		var lefts = i%10*100;
		var tops = Math.floor(i/10)*100;
		str += '<li style="left:'+lefts+'px;top:'+tops+'px;background-position:'+-lefts+'px '+-tops+'px;"></li>'
	}
	str +='</ul>' ;
	divs.innerHTML = str;
	for(var i=0;i<lis.length;i++){
		lis[i].onmouseover = function(){
			this.className = 'show';
		}
	}
}
