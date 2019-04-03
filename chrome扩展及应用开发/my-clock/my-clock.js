function my_clock(el){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m=m>=10?m:('0'+m);
    s=s>=10?s:('0'+s);
    // el.innerHTML = h+":"+m+":"+s;
    var child = el.childNodes;
    var cla;
    child.forEach(function(o,i){
    	if(o.nodeType == 1 && o.nodeName == 'SPAN'){
			cla = o.getAttribute('class');
			if(cla.indexOf('red')>-1){
				o.innerHTML = h+":";
			}
			if(cla.indexOf('green')>-1){
				o.innerHTML = m+":";
			}
			if(cla.indexOf('blue')>-1){
				o.innerHTML = s;
			}
    	}
    });
    setTimeout(function(){my_clock(el)}, 1000);
}

var clock_div = document.getElementById('clock_div');
my_clock(clock_div);