window.onload = function(){
	var div = document.getElementsByTagName('div');
	var inp = document.getElementsByTagName('input');
	var arr = [
		[],
		[]
	];
	var time;
	var onOff = true;
	var ona = true;
	//鼠标按下
	div[1].onmousedown =  function(){
		if(!ona)return;
		ona = false;
		div[1].style.border ='2px dotted #ccc';
		var divx = event.clientX-this.offsetLeft;
		var divy = event.clientY-this.offsetTop;
		//用document事件鼠标脱离按下的元素产生的BUG
		document.onmousemove = function(){
			var x = event.clientX-divx;
			var y = event.clientY-divy;
			//把移动的值保存下来
			arr[0].push(x);
			arr[1].push(y);
			div[1].style.left = x+'px';
			div[1].style.top = y+'px';
		}
		//清除document身上的事件
		document.onmouseup = function(){
			div[1].style.border = '';
			div[0].style.left =div[1].style.left;
			div[0].style.top =div[1].style.top;
			document.onmousemove=document.onmouseup = null;
			
		}
		return false;
	} 
	//从拖动轨迹会到原来的地方
	inp[0].onclick = function(){
		if(!onOff)return;
		onOff = false;
		
		time=setInterval(function(){
			if(arr[1].length==0){
				clearInterval(time);
				div[1].style.left=0;
				div[1].style.top = 0;
				div[0].style.left=0;
				div[0].style.top = 0;
				onOff = true;
				ona = true;
				return;
			}else{
				div[0].style.left = arr[0].pop()+'px';
				div[0].style.top = arr[1].pop()+'px';
			}
		},50)
		
	}
}
