window.onload = function(){
	(function(){
		//创建元素
		var ul = document.createElement('ul');
		var inps1 = document.getElementById('but');
		var inps2 = document.getElementById('butt');
		//点击在页面创建元素
		inps1.onclick = function(){
			var li = document.createElement('li');
			var inps = document.createElement('input');
			var img = document.createElement('img');
			img.src = 'img/1.jpg';
			inps.type = 'checkbox';
			inps.style.display = 'none';
			//给li加点击事件
			li.onclick = function(){
				li.style.border = "1px solid #ccc";
				li.style.background = 'rgba(255,0,255,0.2)';
				inps.style.display = 'block';
				inps.style.cssText = 'position:absolute;top:0;left:0;';
				inps.checked = true;
			}
			//给li添加鼠标移入事件
			li.onmouseover = function(){
				li.className='active';
				inps.style.display = 'block';
				inps.style.cssText = 'position:absolute;top:0;left:0';
			}
			//给li添加鼠标移出事件
			li.onmouseout = function(){
				li.className='';
				if(inps.checked==false){
					inps.style.display = 'none';
				}
			}
			//把创建的文件添加进来
			li.appendChild(img);
			li.appendChild(inps);
			ul.appendChild(li);
			document.body.appendChild(ul);
			//点击删除选中的文件
			butt.onclick = function(){
				var inps1 = document.getElementsByTagName('input');
				for(var i=2;i<inps1.length;i++){	
					if(inps1[i].checked){
						ul.removeChild(inps1[i].parentNode);
						i--;
					}
				}
			}
		}
	})()
}
