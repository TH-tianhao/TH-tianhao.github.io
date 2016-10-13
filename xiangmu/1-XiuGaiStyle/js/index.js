window.onload = function(){
	//			需求:	1.点击.点击设置显示div4
	//				2.点击背景色一栏改变div2的背景色
	//				3.点击宽度一栏改变div2的宽度
	//				4.点击高度一栏改变div2的高度
	//				5.点击保存让div4消失并且保存div2当前的状态
	//				6.点击恢复让div2还原到初始化状态
	var div1 = document.getElementById('div1');
	var div2 = document.getElementById('div2');
	var div3 = document.getElementById('div3');
	var div4 = document.getElementById('div4');
	var a1 = document.getElementById('a1');
	var a2 = document.getElementById('a2');
	var a3 = document.getElementById('a3');
	var i1 = document.getElementById('i1');
	var i2 = document.getElementById('i2');
	var i3 = document.getElementById('i3');
	var i4 = document.getElementById('i4');
	var i5 = document.getElementById('i5');
	var i6 = document.getElementById('i6');
	var i7 = document.getElementById('i7');
	var i8 = document.getElementById('i8');
	var i9 = document.getElementById('i9');
	//点击显示DIV3
	a1.onclick = function(){
		div3.style.display = 'block';
	};
	//点击改变DIV2的颜色
	i1.onclick = function(){
		div2.style.background = 'red';
	};
	//点击改变DIV2的颜色
	i2.onclick = function(){
		div2.style.background = 'yellow';
	};
	//点击改变DIV2的颜色
	i3.onclick = function(){
		div2.style.background = 'blue';
	};
	//点击改变div2的宽度
	i4.onclick = function(){
		div2.style.width = '100px';
	};
	//点击改变div2的宽度
	i5.onclick = function(){
		div2.style.width = '200px';
	};
	//点击改变div2的宽度
	i6.onclick = function(){
		div2.style.width = '300px';
	};
	//点击改变div2的高度
	i7.onclick = function(){
		div2.style.height = '100px';
	};
	//点击改变div2的高度
	i8.onclick = function(){
		div2.style.height = '200px';
	};
	//点击改变div2的高度
	i9.onclick = function(){
		div2.style.height = '300px';
	};
	//点击让div2还原到初始化
	a2.onclick = function(){
		div3.style.display = 'none'; 
	div2.style.width = '50px';
	div2.style.height = '50px';
	div2.style.background = '#fff';
	};
	//点击让div4隐藏并保存div2当前的状态
	a3.onclick = function(){
		div3.style.display = 'none';
	};
}
		