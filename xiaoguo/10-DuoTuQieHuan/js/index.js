window.onload = function(){
	var imgs = document.getElementsByTagName('img');
	var inps = document.getElementsByTagName('input'); 
	var divs = document.getElementsByTagName('div');
	var ps = document.getElementsByTagName('p');
	var is = document.getElementsByTagName('i');
	var arr = ['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg'];
	var arr1 = ['第一张','第二张','第三张','第四张','第五张'];
//	点击上一组
	inps[0].onclick = function(){
//		for()循环的作用是给多组元素同事添加同一组点击效果
		for(var i=0;i<imgs.length;i++){
//			点击图片可以让他返回到上一层imgs[i].num从imgs点击事件那调用的
			imgs[i].num--;
//			添加判断条件让图片可以从第一张在此点击可以到最后一张
			if(imgs[i].num<0){
				imgs[i].num=arr.length-1;
			}
//			调用的函数i值是选中每一个imgs，imgs[i].num是对应每一个图组中的数据
			pics(i,imgs[i].num);
		}
	};
//	点击下一组
	inps[1].onclick = function(){
//		给每一个imgs添加一个共同的事件
		for(var i=0;i<imgs.length;i++){
//			点击下一组可以让图片同事调到下一张
			imgs[i].num++;
//			判断条件当点击的图片到最后一张的时候再次点击可以让图片回到第一张
			if(imgs[i].num>arr.length-1){
				imgs[i].num = 0;
			}
//			调用函数解释同点以上一组一样上
			pics(i,imgs[i].num);
		}
	};
//	for为的给每一个imgs添加一个单独的点击事件
	for(var i=0;i<imgs.length;i++){
		//初始化给每一个imgs添加一个对应第一张图片的描述和页数
		pics(i,0);
//		索引为的选中每一个imgs
		imgs[i].index = i;
		//索引为的给imgs添加一个对应图片的描述和页数所引用的值
		imgs[i].num = 0;
		//给每一个添加imgs点击事件
		imgs[i].onclick = function(){
//			点击那一个那一个的num值增加
			this.num++;
//			判断num值不能大于图片数组的长度要是超过了就让他回到第一张图片
			if(this.num>arr.length-1){
				this.num = 0;
			}
			//this.index对应的是imgs
			//this.num对应图组，描述的循环值
			pics(this.index,this.num);
		}
	}
//	函数传参形参
	function pics(index,num){
//		图片的路径
		imgs[index].src = './img/'+arr[num];
//		对应图片的描述
		ps[index].innerHTML = arr1[num];
//		对应图片的页数
		is[index].innerHTML = (num+1)+'/'+arr.length;
	}
}
