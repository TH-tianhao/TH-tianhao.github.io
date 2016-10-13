window.onload = function(){
	var divs = document.getElementById('div1');
	var uls = document.getElementsByTagName('ul')[0];
	var lis = uls.getElementsByTagName('li');
	var tar = '';
	for(var i=1;i<10;i++){
		for(var j=i;j<10;j++){
			tar +='<li style="left:'+i*110+'px;top:'+j*60+'px;">'+i+'*'+j+'='+i*j+'</li>';
		}
	}
	uls.innerHTML = tar;
}
