window.onload =function(){
	var inps = document.getElementsByTagName('input');
	var uls = document.getElementsByTagName('ul');
	var lis = document.getElementsByTagName('li');
	var num = 7;
	//一组空字符串
	var ter = ['','','',''];
	//	生成倒V
	for(var i=0;i<num;i++){
			if(i>num/2){ 
				ter[0] += '<li style="left:'+i*60+'px;top:'+(num-i-1)*60+'px;"></li>';
			}else{
				ter[0] +='<li style="left:'+i*60+'px;top:'+i*60+'px;"></li>';
			}
		}
	//	生成右V
	for(var i=0;i<num;i++){
			if(i>num/2){ 
				ter[1] += '<li style="left:'+i*60+'px;top:'+i*60+'px;"></li>';
			}else{
				ter[1] += '<li style="left:'+(num-i-1)*60+'px;top:'+i*60+'px;"></li>';
			}
		}
	//	生成正V
	for(var i=0;i<num;i++){
			if(i>num/2){ 
				ter[2] += '<li style="left:'+i*60+'px;top:'+i*60+'px;"></li>';
			}else{
				ter[2] +='<li style="left:'+i*60+'px;top:'+(num-i-1)*60+'px;"></li>';
			}
		}
	//	生成左边的V
	for(var i=0;i<num;i++){
			if(i>num/2){ 
				ter[3] += '<li style="left:'+(num-i-1)*60+'px;top:'+i*60+'px;"></li>';
			}else{
				ter[3] +='<li style="left:'+i*60+'px;top:'+i*60+'px;"></li>';
			}
		}
	//循环点击生成上下左右4个V
	var nums = 0;
	inps[0].onclick = function(){
		nums++;
		if(nums>3){
			nums = 0;
		}
		uls[0].innerHTML = ter[nums];
	};
}
