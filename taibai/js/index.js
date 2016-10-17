// window.onresize = function(){
// 	window.location.href = window.location.href;
// }
$(function(){
	var maxheight = window.innerHeight;
	var num = 0;
	var onOff = true;
	// 滚轮事件
	mScroll($(document).get(0),up,dow);
	// 滚轮向下事件
	function dow(){
		if(!onOff)return;
		onOff = false;
		var cent = document.querySelectorAll('.content>div')
		clearbottom_list()
		num++;
		switch(num){
			case 0:
			break;
			case 1:
				tween1but();
				setTimeout(function(){
					tween2top();
				},400)
			break;
			case 2:
				tween2but();
				setTimeout(function(){
					tween3top();
				},400)
			break;
			case 3:
				tween3but();
				setTimeout(function(){
					tween4top();
				},400)
			break;
		};

		if(num>cent.length-1){
			num = cent.length-1;
		};
		listyle(num);
		$('.content').css('top',-maxheight*num);
		setTimeout(function(){
			onOff = true;
		},2030);
	};
	// 滚轮向上事件
	function up(){
		if(!onOff)return;
		onOff = false;
		clearbottom_list()
		num--;
		switch(num){
			case 0:
				tween2but();
				setTimeout(function(){
					tween1top();
				},400)
			break;
			case 1:
				tween3but();
				setTimeout(function(){
					tween2top();
				},400)
			break;
			case 2:
				tween4but();
				setTimeout(function(){
					tween3top();
				},400)
			break;
		};
		if(num<0){
			num = 0;
		};
		listyle(num);
		$('.content').css('top',-maxheight*num);
		setTimeout(function(){
			onOff = true;
		},2030);
	};
	// 初始化设置body的高度
	$('body').css('height',maxheight).find('section>div.content>div').css('height',maxheight);
	tween1top();
	// 显示函数
	function fn(obj){
		obj.css({
			transform:'translateY(0)',
			opacity:'1'
		})
	}
	// 隐藏函数
	function fns(obj,target,time){
		obj.css({
			transform:target,
			opacity:0,
			transition:time
		})
	}
	// 第一页的显示中间的内容
	function tween1top(){
		$('.content1>div:nth-of-type(2)').animate({top:'0'},1000);
		fn($('.content1>div:nth-child(1)>div:nth-child(1)'));
		setTimeout(function(){
			fn($('.content1>div:nth-child(1)>div:nth-child(2)'));
			fn($('.content1>div:nth-child(1)>div:nth-child(3)'));
		},700);
	};
	function tween1but(){
		$('.content1>div:nth-of-type(2)').animate({top:'-600'},300);
		fns($('.content1>div:nth-child(1)>div:nth-child(1)'),'translateY(-280px)','0.3')
		fns($('.content1>div:nth-child(1)>div:nth-child(2)'),'translateY(-225px)','0.3')
		fns($('.content1>div:nth-child(1)>div:nth-child(3)'),'translateY(225px)','0.3')
	};
	// 第二个页面
	function tween2top(){
		fn($('.content2>div:nth-child(1)'));
		setTimeout(function(){
			fn($('.content2>div:nth-child(1)>div:nth-child(2)'));
		},900);
		fn($('.content2>div:nth-child(1)>div:nth-child(1)'));
		fn($('.content2>div:nth-child(2)'))
	}
	function tween2but(){
		fns($('.content2>div:nth-child(1)'),'translateY(200px)','0.3');
		fns($('.content2>div:nth-child(1)>div:nth-child(2)'),'translateY(50px)','0.2');
		fns($('.content2>div:nth-child(1)>div:nth-child(1)'),'translateY(100px)','0.3');
		fns($('.content2>div:nth-child(2)'),'translateY(500px)','0.3')
	}
	// 第三个页面显示的内容
	function tween3top(){
		$('.content3>div:nth-child(1)').css({
			transform:'scale(1)',
			opacity:'1',
		});
		fn($('.content3>div:nth-child(2)>div:nth-child(1)'))
		fn($('.content3>div:nth-child(2)>div:nth-child(2)'))
		fn($('.content3>div:nth-child(2)>div:nth-child(3)'))
		setTimeout(function(){
			fn($('.content3>div:nth-child(2)>div:nth-child(4)'))
		},800);
	}
	function tween3but(){
		fns($('.content3>div:nth-child(1)'),'scale(0.2)','0.3')
		fns($('.content3>div:nth-child(2)>div:nth-child(1)'),'translateY(200px)','0.3')
		fns($('.content3>div:nth-child(2)>div:nth-child(2)'),'translateY(-200px)','0.3')
		fns($('.content3>div:nth-child(2)>div:nth-child(3)'),'translateY(200px)','0.3')
		fns($('.content3>div:nth-child(2)>div:nth-child(4)'),'translateY(80px)','0.3')
	}
	// 第四个页面
	function tween4top(){
		$('.content4>div:nth-child(1)').css({
			transform:'scale(1)',
			opacity:'1'
		});
		fn($('.content4>div:nth-child(2)>div:nth-child(1)'))
		fn($('.content4>div:nth-child(2)>div:nth-child(2)'))
		fn($('.content4>div:nth-child(2)>div:nth-child(3)'))
	}
	function tween4but(){
		fns($('.content4>div:nth-child(1)'),'scale(0.2)','0.2')
		fns($('.content4>div:nth-child(2)>div:nth-child(1)'),'translateX(-500px)','0.3')
		fns($('.content4>div:nth-child(2)>div:nth-child(2)'),'translateX(500px)','0.3')
		fns($('.content4>div:nth-child(2)>div:nth-child(3)'),'translateX(300px)','0.3')
	}
	listyle(0)
	function listyle(num){
		$('.nav>div:nth-child(2)>ul>li').css({backgroundPosition:'5px 5px'});
		$('.nav>div:nth-child(2)>ul>li').eq(num).css({backgroundPosition:'0px bottom'});
	}
	// 点跳转屏幕
	$('.nav>div:nth-child(2)>ul>li').on('click',function(){
		listyle($(this).index())
		switch(num){
			case 0:
				 tween1but()
			break;
			case 1:
				 tween2but()
			break;
			case 2:
				 tween3but()
			break;
			case 3:
				 tween4but()
			break;
		};
		num = $(this).index();
		$('.content').css('top',-maxheight*num);
		switch($(this).index()){
			case 0:
				setTimeout(function(){
					tween1top()
				},400)
			break;
			case 1:
				setTimeout(function(){
					tween2top()
					
				},400)
			break;
			case 2:
				setTimeout(function(){
					tween3top()
					
				},400)
			break;
			case 3:
				setTimeout(function(){
					tween4top()
					
				},400)
			break;
		};
	});
	var iR = -150;
	var onOf = true;
	var lis = document.querySelectorAll('.bottom_list>ul>li');
	// 点击放大
	$(lis).on('click',function(ev){
		ev.stopPropagation();
		setStyle(this,"0.3s",'scale(2) rotate(-720deg)','0');
		addEnd(this,end)
	})
	function end(){
		setStyle(this,"0.1s",'scale(1) rotate(-720deg)','1')
		removeEnd(this,end);
	}
	function setStyle(obj,a,b,c){
		obj.style.transition = a;
		obj.style.transform = b;
		obj.style.opacity = c;
	}
	// 右下角的旋转效果
	$('.bottom_list>div').on('click',function(ev){
		ev.stopPropagation();
		if(onOf){
			this.style.transform = 'rotate(-360deg)';
			for(var i=0;i<lis.length;i++){
				var degs=deg(iR,90/4*i);
				setStyleto(i,i,'scale(1) rotate(-720deg)',degs.left,degs.top);
			}
		}else{
			clearbottom();
		}
		onOf = !onOf;
	})
	$(document).on('click',clearbottom_list)
	function clearbottom_list(){
		clearbottom();
		if(!onOf){
			onOf = !onOf;
		}
	}
	function clearbottom(){
		$('.bottom_list>div').css('transform','rotate(0deg)');
		for(var i=0;i<lis.length;i++){
				var degs=deg(iR,90/4*i);
				setStyleto(i,(lis.length-i),'scale(1) rotate(0deg)',0,0);
		}
	}
	function setStyleto(index,s,dega,left,top){
		lis[index].style.transition = '0.5s '+s*100+'ms';
		lis[index].style.transform = dega;
		lis[index].style.left = left+'px';
		lis[index].style.top =	top+'px';
	}
})
	
