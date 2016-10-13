window.onload=function(){
	var arr = [12.5,12,22.5,8.5,10.5,5];
	var uls = document.getElementsByTagName('ul')[0];
	var lis = uls.getElementsByTagName('li');
	var hj = document.getElementsByTagName('div')[0];
	var ems = hj.getElementsByTagName('em');
	var str = '';
	for(var i=0;i<arr.length;i++){
		str +='<li><i>-</i><span>0</span><i>+</i><strong>单价:</strong><span>12.5</span><p>元</p><strong>小计:</strong><span>0</span><p>元</p></li>';
	}
	uls.innerHTML += str;
	function fn(index){
		var is = lis[index].getElementsByTagName('i');
		var spans = lis[index].getElementsByTagName('span');
		var strongs = lis[index].getElementsByTagName('srrong');
		//单价
		spans[1].innerHTML = arr[index];
		
		//减少按钮
		is[0].onclick = function(){
			lis[index].num--;
			if(lis[index].num<0){
				lis[index].num = 0;
			}
			fns();
		}
		//增加按钮
		is[1].onclick = function(){
			lis[index].num++;
			fns();
		}
		//显示商品数量，总价格，单价最高的商品
		function fns(){
			spans[0].innerHTML = lis[index].num;
			lis[index].sum = spans[2].innerHTML = lis[index].num*arr[index];
			var num = 0;
			var sum = 0;
			var n = 0;
			for(var i=0;i<lis.length;i++){
				num += lis[i].num;
				sum += lis[i].sum;
				if(lis[i].num!=0 && arr[i]>n){
					n = arr[i];
				}
			}
			ems[0].innerHTML = num;
			ems[1].innerHTML = sum;
			ems[2].innerHTML = n;
		}
	}
	//给每一个li绑定事件
	for(var i=0;i<lis.length;i++){
		lis[i].num = 0;
		lis[i].sum =0;
		fn(i);
	}
}
