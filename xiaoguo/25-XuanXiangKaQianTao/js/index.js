window.onload =function(){
	var arr=[
		[ "暖色调", ["暖色键盘","惬意时光","午后","一杯苦咖啡"],["img/img1.gif","img/img2.gif","img/img3.gif","img/img4.gif"]],
	
		["金色夕阳",["街边夕阳","金色稻草"],["img/img5.gif","img/img6.gif"]],
	
		["灰色格调",["灰色通讯","咖啡'配'饼干","孤单键盘","枯树"],["img/img7.gif","img/img8.gif","img/img9.gif","img/img10.gif"]],
	
		["baby",["baby素材一","baby素材二"],["img/img11.gif","img/img12.gif"]]
	];
	// 获取最大的DIV
	var oDiv = document.querySelector("#box");
	// 存取一个变量的开头
	var str = '<ul>';
	// 存取一个空的变量
	var str1 = '';
	// 循环生成 数组arr的length 
	for(var i=0;i<arr.length;i++){
		// str的内容等于 生成的里 加上那个数组 每一个下面的第0个 的内容
		str += '<li>'+ arr[i][0] +'</li>';
		// str1 的内容等于  生成div的开头加上   数组里面图片的位置   在加上 下面生成文字的显示位置
		str1 += '<div><img src="'+ arr[i][2][0] +'"><ul>';
		// 二维循环生成  上面  ul里面Li的  内容 
		for(var j=0;j<arr[i][1].length;j++){
			// str1 的内容等于 数组里面 第0个 下面的第一个数组里面 每一个的内容循环一遍
			str1 += '<li style="width:'+ 700/arr[i][1].length +'px;">'+ arr[i][1][j] +'</li>';
		}
		// str1 里面现有的内容加上  字符串   的结尾的内容
		str1 += '</div></ul>';
	}
	// str的内容等于加上str1 的内容
	str += '</ul>'+str1;
	// 最大div的内容等于 str 空变量里面的内容
	oDiv.innerHTML = str;
	// 获取最大div下面所有的dIV
	var oDiv1 = oDiv.getElementsByTagName('div');
	// 获取最大DIv里面的ul
	var oUl = oDiv.getElementsByTagName('ul')[0];
	// 获取左边Ul连 所有的Li
	var olis = oUl.getElementsByTagName('li');
	// 让页面第一个的diV  显示出来
	oDiv1[0].style.display = 'block';
	// 让左边第一个里的 CSS名字为 active;  显示出来
	olis[0].className = 'active';
	
	for(var i=0;i<olis.length;i++){
		olis[i].index = i;
		olis[i].onclick = function(){
			for(var i=0;i<olis.length;i++){
				oDiv1[i].style.display = 'none';
				olis[i].className = '';
			};
			this.className = 'active';
			oDiv1[this.index].style.display = 'block';
		};
	}
	
	function fn(index){
		var oul1 = oDiv1[index].getElementsByTagName('ul');
		var olis1 = oul1[0].getElementsByTagName('li');
		var aImg = oDiv1[index].getElementsByTagName('img')[0];
		olis1[0].className = 'active';
		for(var i=0;i<olis1.length;i++){
			olis1[i].index = i;
			olis1[i].onclick = function(){
				for(var i=0;i<olis1.length;i++){
					olis1[i].className = '';
				};
				this.className = 'active';
				aImg.src = arr[index][2][this.index];
			};
		};
	}
	for(var i=0;i<oDiv1.length;i++){
		fn(i);
	}
}
