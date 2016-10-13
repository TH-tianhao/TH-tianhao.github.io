//闭包匿名函数自执行
(function(){
	var text1,
		text2,
		onclickright,
		onclickleft,
		ps,
		spans,
		timer,
		lis;
	var onOff = true;
		//函数接收到外面的元素
		function tianhao(text1Ele,text2Ele,onclickrightEle,onclickleftEle,psEle,spansEle,lisEle){
			text1 = text1Ele;
			text2 = text2Ele;
			onclickright = onclickrightEle;
			onclickleft = onclickleftEle;
			ps = psEle;
			spans = spansEle;
			lis = lisEle;
			texts();
		}
		
		//
		function texts(){
			var len = ps[0].innerHTML.length;
			var arr =['red','blue','cyan','pink','#ccc','#565346','#677432']
			spans[0].innerHTML = ps[0].innerHTML.length+'/'+len;
			spans[1].innerHTML = ps[1].innerHTML.length+'/'+len;
			oclicks();
			//
			function tes(ps2,ps1,spans1,spans2){
				if(!onOff){
					return;
				}
				if(ps1.innerHTML == ''){
					alert('已经没有内容了');
					return;
				}
				onOff = false;
				//定时器
				timer = setInterval(function(){
					//让我第二个快元素每次获得从第一个元素截取的字符
					ps2.innerHTML += ps1.innerHTML.substring(0,1);
					//每次截取一个字符
					ps1.innerHTML = ps1.innerHTML.substring(1);
					//改变自己色
					ps2.style.color =arr[ps2.innerHTML.length%arr.length];
					ps1.style.color = arr[(ps2.innerHTML.length%arr.length)-1];
					//改变字体
					ps2.style.fontSize = '40px';
					//清除背景色
					for(var j=0;j<lis.length;j++){
						lis[j].style.background = '';
					}
					lis[ps1.innerHTML.length%lis.length].style.background = arr[(ps1.innerHTML.length%arr.length)+1];
					//对应内容的数字
					spans1.innerHTML = ps1.innerHTML.length+'/'+len;
					spans2.innerHTML =ps2.innerHTML.length+'/'+len;
					//当元素内容为空就清除定时器
					if(ps1.innerHTML==''){
						clearInterval(timer);
						onOff = true;	
					}
				},20)
			}
			//点击事件
			function oclicks(){
				onclickright.onclick = function(){
					tes(ps[1],ps[0],spans[0],spans[1]);
				};
				onclickleft.onclick = function(){
					tes(ps[0],ps[1],spans[1],spans[0]);
				};
			}	
		}
	window.tianhao = tianhao;
})();
