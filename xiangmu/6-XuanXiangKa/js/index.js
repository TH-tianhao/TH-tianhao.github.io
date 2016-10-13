window.onload = function(){
	var inps = document.getElementsByTagName('input');
	var ps = document.getElementsByTagName('p');
	for(var i=0;i<inps.length;i++){
		inps[i].index = i;
		inps[i].onclick = function(){
			for(var i=0;i<inps.length;i++){
				inps[i].className = '';
				ps[i].className = '';
			}
			this.className = 'active';
			ps[this.index].className = 'show';
		}
	}
}
