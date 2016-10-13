window.onload = function(){
	var divs = document.getElementsByTagName('div');
			var str ='';
			var num = 9;
			var nums = -1;
			var timer;
			
			for(var i=0;i<num;i++){
				str += '<div style ="left:'+i*110+'px;top:'+10+'px;"></div>'
			}
			document.body.innerHTML = str;
//			获取一组元素
			var divs = document.getElementsByTagName('div');
//			在定时器中让num的数字值对应div
			var nums = 0;
//			开关的判断
			var onOff = true;
//			保存定时器的Id
			var timer;
			//点击改变元素的某一个值
			var target = 400;
			
			var n = 0;
			//点击文档
			document.onclick = function(){
				//当我的点击状态是false就阻断当前的点击事件的触发
				if(!onOff){
					return;
				}
				//当我的点击状态是true的时候就把他变成false.继续运行下边的代码
				onOff = false;
				//运行循环管定时器，并获得定时器的Id
				timer = setInterval(function(){
					
					//运动函数，元素，属性，目标点，运行时间，运动方式，运动结束要执行的函数
					mTween(divs[nums],'top',target,100,'linear',function(){
						n++;
						//我的nums是否大于我元素的最大数量。
						if(n>=divs.length){
							//不能用num因为运动时间延长会出现BUG在运动没有做完的时候在此开启
							n= 0;
							//在做完所有运动的时候让点击状态在此返回到真的
							onOff = true;
							
//							if(nn== n = 10;
//							}else{
//								nn = 400;
//							}
						//先判断target是否等于400是就让他等于10 ，不是就等于后边。把得到的值返还给target
						//三元运算必须有? 和:
						target = target == 400? 10:400;	
						}
					});
					//在运行完上边的代码让nums自增
					nums++;
					//判断nums是否大于div的数量
					if(nums>=divs.length){
						//让nums回到0下
						nums = 0;
						//清空循环定时器
						clearInterval(timer);
					}
					
				},100);
					
			}
}
