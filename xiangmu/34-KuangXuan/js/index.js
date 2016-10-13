window.onload = function(){
	var dis = $('div');
	$('input:checkbox').change(function(){
		var parent = $(this).parent().parent()
		if(this.checked){
			parent.css('background','red')
		}else{
			parent.css('background','')
		}
	})
	dis.mousedown(function(){
		return false;
	})
	$(document).mousedown(function(ev){
		// 记录鼠标出现的位置
		var disx = ev.clientX;
		var disy = ev.clientY;
		dis.css('background','').find('input:checkbox').each(function(i,index){
			index.checked = false
		});
		// 创建元素
		var ss = document.createElement('s');
		document.body.appendChild(ss);
		$(document).mousemove(function(ev){
			// 给创建的元素赋值
			ss.style.left = disx+'px';
			ss.style.top = disy+'px';	
			ss.style.border = '1px dotted #ccc';
			ss.style.display = 'block';
			ss.style.position = 'absolute';
			// 记录鼠标按下到拖动的位置
			var x = ev.clientX-disx;
			var y = ev.clientY-disy;
			// 判断如果移动的位置是负值就把他的left，top重新赋值
			if(x<0){
				ss.style.left = ev.clientX+'px';
			}
			if(y<0){
				ss.style.top = ev.clientY+'px';
			}
			// 赋值元素的宽高。x，y有负数需要去绝对值
			ss.style.width = Math.abs(x)+'px';
			ss.style.height = Math.abs(y)+'px';
			// 添加元素
			dis.each(function(i,eles){
				if(CollisionTest(eles,ss)){
					$(eles).css('background','red').find('input:checkbox')[0].checked = true;
				}else{
					$(eles).css('background','').find('input:checkbox')[0].checked = false;
				}
			})
		})
		// 清除事件在删除创建的元素
		$(document).mouseup(function(){

			document.body.removeChild(ss);
			$(document).off('mousemove mouseup');
		})

		ev.stopPropagation();
		return false;
	})
	// 检测碰撞函数
	function CollisionTest(obj1,obj2){
		objs1 = Pos(obj1)
		objs2 = Pos(obj2)
		console.log()
		if(objs1.top>objs2.bottom||objs1.left>objs2.right||objs1.right<objs2.left||objs1.bottom<objs2.top){
			return false;
		}else{
			return true;
		}
	}
	// 获取属性函数
	function Pos(obj){
		return obj.getBoundingClientRect();
	}
}
