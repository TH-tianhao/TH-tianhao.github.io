
function $(selector,context){
	var type = typeof selector,
	context = context||document;
	if(typeof context === 'string'){
		
		var ele = $(context);
		var eles=[];
		if(ele.length !== undefined){
			ele = Array.from(ele);
			ele.forEach(function(value){
				eles = eles.concat(Array.from($(selector,value)))
			});
			return [...(new Set(eles))];
		}
		return $(selctor,ele);
	}
	
	if(type === 'string'){
		var s = selector.charAt();
		
		switch(s){
			case '#':return document.getElementById(selector.substring(1));
			break;
			case '.': return context.getElementsByClassName(selector.substring(1));
			break;
			
			default:
			return context.getElementsByTagName(selector);
			
		}
	}
	if(type ==='function'){
		return window.onload = selector;
	}
}
