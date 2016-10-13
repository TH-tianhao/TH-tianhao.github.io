window.onload = function(){
	function getTagName(x){
		return document.getElementsByTagName(x);
	}
	var divs = getTagName('div')[0];
	var lis = getTagName('li');
	var is = divs.getElementsByTagName('i');
	var bs = getTagName('b');
	var ps = getTagName('p');
	var is1 = ps[0].getElementsByTagName('i');
	var bs1 = ps[0].getElementsByTagName('b')[0];
	is1[0].onOff = true;
	//生成ul里边的li所用的字符串
	var str = '<ul>';
	//生成li和里边的内容
	for(var i=0;i<10;i++){
		str += '<li><i><b></b></i></li>'
	}
	str += '</ul>'
	//在div上边显示生成的内容
	divs.innerHTML += str;
	//隔行变色
	ffs();
	//给每一元素添加事件
	for(var i=0;i<lis.length;i++){
		lis[i].index = i;
		is[i].index = i;
		//鼠标移入改变背景色
		lis[i].onmouseover = function(){
			this.className = 'thistle';
		}
		//鼠标移出恢复原来的背景色
		lis[i].onmouseout = function(){
			ffs();
		}
		//点击改变背景色
		is[i].onOff = true;
		is[i].onclick = function(){
			if(this.onOff){
				bs[this.index].className = 'show';
				lis[this.index].style.background = 'yellowgreen';
			}else{
				bs[this.index].className = '';
				lis[this.index].style.background = '';
			}
			this.onOff = !this.onOff;
		}
		is1[0].onclick = function(){
			for(var i = 0 ; i<is.length ;i++ ){
				is[i].onOff = this.onOff
				is[i].onclick();
			}
			if(this.onOff){
				bs1.className = 'show';
			}else{
				bs1.className = '';
			}
			this.onOff = !this.onOff;
		}
	}
	//隔行变色
	function ffs(){
		for(var i=0;i<lis.length;i++){
			if(i%2){
				lis[i].className = 'red';
			}else{
				lis[i].className = 'cyan';
			}
		}
	}
}
