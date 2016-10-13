//匿名函数自执行
(function(){
	var box,
		chose,
		values,
		chosea,
		chose3,
		chose3a,
		value1,
		value1a,
		value2,
		value2inps,
		value3,
		value3inps,
		spans;
	var onOff = true;
	var str = '';
	//接收从外边传入的参数
	function tianhao(boxEle,choseEle,valuesEle,choseaEle,chose3Ele,chose3aEle,value1Ele,value1aEle,value2Ele,value2inpsEle,value3Ele,value3inpsEle,spansEle){
		box = boxEle;
		chose = choseEle;
		values = valuesEle;
		chosea = choseaEle;
		chose3 = chose3Ele;
		chose3a = chose3aEle;
		value1 = value1Ele;
		valeu1a =  value1aEle;
		value2 = value2Ele;
		value2inps = value2inpsEle;
		value3 = value3Ele;
		value3inps = value3inpsEle;
		spans = spansEle;
		onclicks();
	}
	
	function onclicks(){
		//查找替换的开关
		chosea.onclick = function(){
			if(onOff){
				chose3.className = 'active';
			}else{
				chose3.className = 'chose1';
			}
			onOff = !onOff;
		};
		//点击显示查找
		chose3a[0].onclick = function(){
			cho3(value3,value2,1,0);
		};
		//点击显示替换
		chose3a[1].onclick = function(){
			cho3(value2,value3,0,1)
		};
		//显示函数
		function cho3(v3,v2,a,b){
			chose3.className = 'chose1';
			values.className ='active';
			onOff = !onOff;
			v3.className = 'chose1';
			v2.className = 'active';
			valeu1a[a].className = '';
			valeu1a[b].className = 'red';
		}
		//点击切换查找
		valeu1a[0].onclick = function(){
			va(value2,value3,1,0);
		};
		//点击切换替换
		valeu1a[1].onclick = function(){
			va(value3,value2,0,1);
		};
		//切换函数
		function va(v2,v3,a,b){
			v2.className = 'active';
			v3.className = 'chose1';
			valeu1a[a].className = '';
			valeu1a[b].className = 'red';
		}
		//输入内容查看
		var boxss = box.innerHTML;
		value2inps[1].onclick = function(){
			innerss(value2inps[0],value2inps[0]);
		};
		//输入内容替换
		value3inps[2].onclick = function(){
			
			if(value3inps[0].value == ''){
				alert('输入的内容不能为空');
				return;
			}
			if(boxss.indexOf(value3inps[0].value) == -1){
				alert('你输入的内容不存在');
				return;
			}
			//这用传参有一个BUG，如果输入的内容是不存在的他会提示先删除，在提示输入的内容是不存在的没有解决
			if(!confirm('确定删除'+value3inps[0].value)){
				return;
			}
			box.style.color = '#000';
			box.innerHTML = boxss.split(value3inps[0].value).join(value3inps[1].value);
			boxss = box.innerHTML;
			
		};
		//查找替换函数
		function innerss(valu2,valu3){
			if(valu2.value == ''){
				alert('输入的内容不能为空');
				return;
			}
			if(boxss.indexOf(value2inps[0].value) == -1){
				alert('你输入的内容不存在');
				return;
			}
			box.style.color = '#000';
			box.innerHTML = boxss.split(valu2.value).join('<span>'+valu3.value+'</span>');
		}
	}	
	window.tianhao = tianhao;
})()
