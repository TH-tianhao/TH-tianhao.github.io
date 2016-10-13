window.onload = function(){
	var num;
	var bnum;
	var snum;
	var gnum;
//	153  1*1*1  +   5*5*5  + 3*3*3   =   153   求100到1000之中的水仙花数
	for(var i=100;i<1000;i++){
//		求百位数
		bnum = Math.floor(i/100);
//		求十位数
		snum = Math.floor((i-bnum*100)/10);
//		求个位数
		gnum = i-(bnum*100)-(snum*10);
//		求num值
		num = bnum*bnum*bnum+snum*snum*snum+gnum*gnum*gnum;
//		判断num的值是否等于100到1000中的数字
		if(num==bnum*100+snum*10+gnum){
//		在文档上输出num值
			document.body.innerHTML += num+' ';
		}	
	}
}
