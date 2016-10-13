window.onload=function(){
//需求:
//	1.获取元素
//	2.需要一个字符串,因为浏览器对一个标签一次性渲染多个元素不会对浏览器造成太大消耗    /反而是对一个标签进行多次渲染性能会更差
//	3.添加样式
//	4.需要一个标签进行输出
	var divs = document.getElementsByTagName('div');
	var uls = document.getElementsByTagName('ul');
	var inps = document.getElementsByTagName('input');
	var num = 0;
	var str = '';
//输入value值生成div，需要把for()循环放到按钮里，否则不会报错但也不会生效应为获取不到
//	inps[0].onclick = function(){
//		获取num值        num等于input的value值
//		num = inps[1].value;
//		for(var i=0;i<num;i++){
//			//用一个空字符串添加生成的元素和样式这样对性能优化有帮助
//			//Math.floor()的意思是向下取证
//			str +='<li style="left:'+i%10*60+'px;top:'+Math.floor(i/10)*60+'px;"></li>';
//		}
//		//ul文本输出
//		ls[0].innerHTML = str;
//	};
	//输入value值生成div，需要把for()循环放到按钮里，否则不会报错但也不会生效应为获取不到
	inps[0].onclick = function(){
//		获取num值        num等于input的value值
		num = inps[1].value;
		for(var i=0;i<num;i++){
			//判断i的值    进入判断i的值回事整数所以求出来的值只会是整数
			if(i%22 == 0){
				t = (i/22)*60;
			}
			//用一个空字符串添加生成的元素和样式这样对性能优化有帮助
			//Math.floor()的意思是向下取证
			str +='<li style="left:'+i%22*60+'px;top:'+t+'px;"></li>';
		}
		//ul文本输出
		uls[0].innerHTML = str;
	};
}
