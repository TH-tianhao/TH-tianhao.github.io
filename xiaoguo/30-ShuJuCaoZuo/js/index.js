window.onload = function(){
	var attr = [
		{
			id:1,
			username:"邢运占",
			age:26,
			sex:"男"
		},
		{
			id:2,
			username:"杨明昊",
			age:25,
			sex:"男"
		},
		{
			id:3,
			username:"段罗希",
			age:26,
			sex:"男"
		}	
	];	
	var arr = ['yellow','pink']
	var table = document.getElementById('table');
	var inps1 = document.getElementsByClassName('textvalue')[0].getElementsByTagName('input');
	var spans = document.getElementsByClassName('textvalue')[0].getElementsByTagName('span')[0];
	var s1 = document.getElementById('s1');
	var s2 = document.getElementById('s2');
	var butt = document.getElementsByTagName('button');
	var form = document.getElementsByTagName('form')[0];
	var tj1 = document.getElementById('sou1');

	var pl = document.getElementById('pl');
	var fx = document.getElementById('fx');
	var tj = document.getElementById('sou');
	var tbody = table.tBodies[0];
	var checkedbox = tbody.getElementsByTagName('input');
	var trs = tbody.rows;
	var len = attr.length;
	// 如果input全部选中就让全选的checked为true
	function oncheckedall(){
		for(var i=0;i<checkedbox.length;i++){
			if(!checkedbox[i].checked){
				return false;
			}
		}
		return true;
	}
	//隔行变色
	function colorchange(){
		for(var i=0;i<trs.length;i++){
			trs[i].style.background = arr[i%arr.length];
		}
	}
	//数据删除
	function removess(id){
		for(var i=0;i<attr.length;i++){
			if(attr[i].id = id){
				attr.splice(i,1);
			}
		}
	}
	
	// 反选
	fx.onclick = function(){
		for(var i=0;i<checkedbox.length;i++){
			checkedbox[i].checked = !checkedbox[i].checked;
			checkedbox[i].onchange();
		}
	}
	// 批量删除
	pl.onclick = function(){
		for(var i=0;i<checkedbox.length;i++){
			if(checkedbox[i].checked){
				tbody.removeChild(trs[i]);
				i--;
			}
		}
		if(checkedbox.length==0){
			form.ss.checked = false;
		}
	};
	//添加数据生成页面
	spans.onclick = function(){
		for(var i=0;i<inps1.length;i++){
			if(inps1[i].value==''){
				return;
			}
		}
		obj = {
			id:++len,
			username:inps1[0].value,
			age:inps1[1].value,
			sex:inps1[2].value
		}
		attr.push(obj);
		create(obj);
		colorchange();
		form.ss.checked = false;
	}
	
	// 排序
	butt[0].onclick =function(){
		var eles = [].slice.call(trs);
		var index;
		if(s1.value == '编号'){
			index = 1;
		}else{
			index = 3;

		}
		 eles.sort(function(a,b){
		 	a = a.children[index].innerHTML;
		 	b = b.children[index].innerHTML;
		 	if(s2.value == '升序'){
		 		return b-a;
		 	}else{
		 		return a-b;
		 	}
		 })
		eles=bubblesort(eles,function(a,b){
			a = a.children[index].innerHTML;
			b = b.children[index].innerHTML;
			if(s2.value=='升序'){
				return a-b;
			}else{
				return b-a;
			}
		})
		for(var i=0;i<eles.length;i++){
			tbody.appendChild(eles[i]);
		}
		colorchange();
	}
	
	//冒泡排序
	function bubblesort(ar,callback){
		var a,b,onOf;
		var arr = [].concat(ar);
		var callback =  callback||function(a,b){
			return a-b;
		}
		for(var i=0;i<arr.length-1;i++){
			onOf = true;
			for(var j=0;j<arr.length-1-i;j++){
				var a = arr[j];
				var b = arr[j+1];
				if(callback(a,b)>0){
					arr[j] = b;
					arr[j+1] = a;
					j--;
					onOf = false;
				}
			}
			if(onOf == true)return arr; 
		}
		return arr;
	}
	//模糊查找
	tj1.onclick = function(){
		for(var i=0;i<trs.length;i++){
			if(trs[i].innerHTML.indexOf(sou.value)!=-1){
				trs[i].style.background='green';
			}else{
				trs[i].style.background=arr[i%arr.length];
				if(checkedbox[i].checked){
					trs[i].style.background='blue';
				}
			}
		}
	}

	//调用创建元素
	for(var i=0;i<attr.length;i++){
		create(attr[i]);
		colorchange();
	}
	//创建元素
	function create(attr){
		var td = document.createElement('td');
		var tr = document.createElement('tr');
		createrow(attr,tr);
		function createrow(attr,tr){
			var td = document.createElement('td');
			var inp = document.createElement('input');
			inp.type = 'checkbox';
			//点击input改变tr的背景色
			inp.onchange = function(){
				if(this.checked){
					tr.style.background = 'blue';
				}else{
					colorchange();
				}
				form.ss.checked = oncheckedall();
			}
			//点击全选改变所有的tr的背景色
			form.ss.onclick = function(){
				for(var i=0;i<checkedbox.length;i++){
					checkedbox[i].checked = this.checked;
					if(this.checked){
						trs[i].style.background = 'blue'
					}else{
						colorchange();
					}
				}
				
			}
			td.appendChild(inp);
			tr.appendChild(td);
			//把数组中的放入页面
			for (var att in attr){
				var td = document.createElement('td');

				td.innerHTML=attr[att];
				tr.appendChild(td);
			}
			var td = document.createElement('td');
			var pre = document.createElement('a');
			var next = document.createElement('a');
			var remove = document.createElement('a');
			pre.href = next.href = remove.href ='javascript:;'; 
			pre.innerHTML = '上移';
			next.innerHTML = '下移';
			remove.innerHTML = '删除'; 
			//点击上移
			pre.onclick = function(){
				if(tr.previousElementSibling){
					tbody.insertBefore(tr,tr.previousElementSibling)
				}else{
					alert('已经是第一个了');
				}
				colorchange();
			};
			// 下移操作
			next.onclick = function(){
				if(tr.nextElementSibling){
					tbody.insertBefore(tr.nextElementSibling,tr);
				}else{
					alert('这已经是最后一个了')
				}
				colorchange();
			};
			//删除操作
			remove.onclick = function(){
				tbody.removeChild(tr);
				for(var i=0;i<checkedbox.length;i++){
					if(checkedbox[i].checked){
						continue;
					}else{
						colorchange();
					}
				}
				removess(attr.id);
				form.ss.checked = oncheckedall();
				if(trs.length==0){
					form.ss.checked = false;
				}
				
			};
			//把创建好的元素添加到对应的元素
			td.appendChild(pre);
			td.appendChild(next);
			td.appendChild(remove);
			tr.appendChild(td);
			tbody.appendChild(tr);
			table.appendChild(tbody);
		}
	}
}
