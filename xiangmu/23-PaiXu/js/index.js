window.onload = function(){
	var uls = $('ul')[0];
	var lis = $('li');
	var imgs = $('img');
	var ps = $('p'); 
	var as = $('a');
	console.log($('#diva'));
	var arr = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg'];
	var arr1 = ['第一张图片','第二张图片','第三张图片','第四张图片','第五张图片','第六张图片','第七张图片','第八张图片']
	var str = '';
	for(var i=0;i<arr.length;i++){
		str += '<li><img src="./img/'+arr[i]+'"><p>'+arr1[i]+'</p></li>';
	};
	uls.innerHTML = str;
	//从小到大
	as[1].onclick = function(){
		as[0].className = 'active';
		as[1].className = 'none';
		arr.sort(function(a,b){
			if(a<b){
				return -1;
			}
			return 1;
		})
		for(var i=0;i<lis.length;i++){
			imgs[i].src = './img/'+arr[i];
			
			ps[i].innerHTML = arr1[parseFloat(arr[i])-1];
		}
	}
	//从大到小
	as[0].onclick = function(){
		as[0].className = 'none';
		as[1].className = 'active';
		arr.sort(function(a,b){
			if(a>b){
				return -1;
			}
			return 1;
		})
		for(var i=0;i<lis.length;i++){
			imgs[i].src = './img/'+arr[i];
			
			ps[i].innerHTML = arr1[parseFloat(arr[i])-1];
		}
	}
	//随机变化
	as[2].onclick = function(){
		arr.sort(function(a,b){
			return Math.random()-0.5;
		})
		for(var i=0;i<lis.length;i++){
			imgs[i].src = './img/'+arr[i];
			
			ps[i].innerHTML = arr1[parseFloat(arr[i])-1];
		}
	}
}
