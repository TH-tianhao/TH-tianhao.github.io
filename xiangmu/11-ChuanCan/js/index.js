window.onload = function(){
	var list = document.getElementById('list');
	var dds = list.getElementsByTagName('dd');
	var str = '';	
//	生成dd个数随便填
	for(var i=0;i<5;i++){
		str +='<dd><p class="p1"><span>hello</span><b><i></i></b></p><p class="p2"><input type="text" value="传参好晕啊"/><input type="button" value="保存"/><input type="button" value="取消"/></p></dd>'
	}
//	在dl显示生成的dd
	list.innerHTML += str;
//	给每一个dd添加样式
	for(var i=0;i<dds.length;i++){
		lists(dds[i]);
	}
//	形参对应的是dd
	function lists(obj){
//		dd下边的P标签
		var ps = obj.getElementsByTagName('p');
//		dd下边的bb标签
		var bs = obj.getElementsByTagName('b');
//		dd下边的input标签
		var inps = obj.getElementsByTagName('input');
//		dd下边的span标签
		var spans = obj.getElementsByTagName('span');
//		点击b标签隐藏dd里边的第一个P标签显示第二个p标签
		bs[0].onclick = function(){
			ps[0].className = 'p2';
			ps[1].className = 'p1';
//			为的把上一次保存的内容返还给输入栏覆盖因取消按钮无法清除Value带来的BUG
			inps[0].value = spans[0].innerHTML;
		}
//		点击保存可以让input[0]的Value值可以保存在span标签里
		inps[1].onclick = function(){
			pss();
//			判断输入框里的内容是否为空的如果是空的就提示阻断代码运行
			if(inps[0].value !=''){
				spans[0].innerHTML = inps[0].value;
			}else{
				alert('输入的内容不能为空');
				return;
			}
		}
//		点取消让第一个P标签呢显示，第二个P标签隐藏
		inps[2].onclick = function(){
			pss();
		}
//		p1是显示p2是隐藏
		function pss(){
			ps[0].className = 'p1';
			ps[1].className = 'p2';
		}
	}
}
