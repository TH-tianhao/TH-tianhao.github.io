window.onload = function(){
	var ul= document.getElementsByTagName('ul')[0];
	var onOff = true;
	for(var i=0;i<8;i++){
		(function(){
			var prev;
			var li = document.createElement('li');
			var pre = document.createElement('button');
			var next = document.createElement('button');
			li.innerHTML = (''+i).repeat(10);
			pre.innerHTML = '上移';
			next.innerHTML = '下移';
			pre.onclick = function(){
				if(!onOff)return;
				onOff=false;
				prev = li.previousElementSibling;
				if(prev){
					mTween(li,'top',-li.offsetHeight,500,'linear');
					mTween(prev,'top',li.offsetHeight,500,'linear',function(){
						li.style.top='0px';
						prev.style.top='0px';
						ul.insertBefore(li,prev);
						onOff = true;
					});
				}else{
					alert('已经是第一张了');
					onOff=true;
				}
			}
			next.onclick = function(){
				if(!onOff)return;
				onOff=false;
				console.log(onOff)
				next = li.nextElementSibling;
				if(next){
					mTween(li,'top',li.offsetHeight,500,'linear');
					mTween(next,'top',-li.offsetHeight,500,'linear',function(){
						li.style.top='0px';
						next.style.top='0px';
						ul.insertBefore(next,li);
						onOff = true;
					});
				}else{
					alert('最后一个');
					onOff=true;
				}
			}
			li.appendChild(pre);
			li.appendChild(next);
			ul.appendChild(li);
		})()
	}
	document.body.appendChild(ul);
}
