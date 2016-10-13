window.onload = function(){
//	需求:
//	1.先给图片添加上一个,下一个循环
//  2.让图片的描述对应图片
//	3.让图片的页数对应图片
//	4.点击顺序循环可以让点击上一次,下一次:图片无限循环
//	5.点及顺序循切换可以让点击上一次图片停留在图片组的第一张,点击下一次让图片组停留在最后一张
	var a1 = document.getElementById('a1');
	var a2 = document.getElementById('a2');
	var a3 = document.getElementById('a3');
	var a4 = document.getElementById('a4');
	var ps2 = document.getElementById('p2');
	var is = document.getElementById('is');
	var ps1 = document.getElementById('p1');
	var img1 = document.getElementById('img1');
	var arr = ['0.jpg','1.jpg','2.jpg','3.jpg','4.jpg'];
	var arr1 = ['第一页','第二页','第三页','第四页','第五页'];
	var num = 0;
	var onOff = true;
	//初始化与图片对应的描述和页数
	ps2.innerHTML = arr1[0]
	img1.src = './img/0.jpg';
	is.innerHTML = 1+'/'+arr.length;
	//点击上一次
	a3.onclick = function(){
		num--;
		//判断是不是真的如果是真的就图片他循环播放，如果是假的就让图片运行到最后一张停止
		if(onOff){
			if(num<0){
				num = arr.length-1;
			}
		}else{
			if(num<0){
				num = 0;
				alert("已经是第一张了");
			}
		}
		//调用函数
		imgs1();
	};
	//点击下一次
	a4.onclick = function(){
		num++;
		//判断是不是真的如果是真的就让图片循环播放，如果是假的就让图片运行到最后一张停止
		if(onOff){
			if(num>arr.length-1){
				num = 0
			}
		}else{
			if(num>arr.length-1){
				num = arr.length-1;
				alert('已经是最后一张了');
			}
		}
		//调用函数
		imgs1();
	};
	a1.onclick = function(){
		//循环播放
		onOff = true; 
		ps1.innerHTML = '图片循环播放';
	};
	a2.onclick = function(){
		//顺序播放
		onOff = false;
		ps1.innerHTML = '图片顺序播放'
	};
	
	function imgs1(){
		//改变图片的链接地址
		img1.src = './img/'+arr[num];
		//与图片对应的描述
		ps2.innerHTML = arr1[num];
		//与图片对应的页数
		is.innerHTML = (num+1)+'/'+arr.length;
	}
}
