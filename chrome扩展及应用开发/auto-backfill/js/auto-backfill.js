var pathname = window.location.pathname;
var includeAppidOptions = [
	{
		appid : '30668e7f8bc64e96992bbe7be26bc20a'
	},
	{
		appid : 'a39265d69b5b477196fea4a524b2764c',
		username : '180000000000',
		password : '111111a'
	},
	{
		appid : '30668e7f8bc64e96992bbe7be26bc20a'
	}
];
// 尝试是否能通过模拟键盘输入
function fireKeyEvent(el, evtType, keyCode){  
    var doc = el.ownerDocument,  
        win = doc.defaultView || doc.parentWindow,  
        evtObj;  
    if(doc.createEvent){  
        if(win.KeyEvent) {  
            evtObj = doc.createEvent('KeyEvents');  
            evtObj.initKeyEvent( evtType, true, true, win, false, false, false, false, keyCode, 0 );  
        }  
        else {  
            evtObj = doc.createEvent('UIEvents');  
            Object.defineProperty(evtObj, 'keyCode', {  
                get : function() { return this.keyCodeVal; }  
            });       
            Object.defineProperty(evtObj, 'which', {  
                get : function() { return this.keyCodeVal; }  
            });  
            evtObj.initUIEvent( evtType, true, true, win, 1 );  
            evtObj.keyCodeVal = keyCode;  
            if (evtObj.keyCode !== keyCode) {  
                console.log("keyCode " + evtObj.keyCode + " 和 (" + evtObj.which + ") 不匹配");  
            }  
        }  
        el.dispatchEvent(evtObj);  
    }   
    else if(doc.createEventObject){  
        evtObj = doc.createEventObject();  
        evtObj.keyCode = keyCode;  
        el.fireEvent('on' + evtType, evtObj);  
    }  
}
var elUserName = document.getElementById('userName');
var elPassword = document.getElementById('password');
if(elUserName && elPassword){
	// includeAppidOptions.forEach(function(o){
	// 	if(pathname.indexOf(o.appid)>-1){
	// 		elUserName.focus();
	// 		elUserName.value = o.username || '13555500000';
	// 		elUserName.blur();
	// 		elPassword.value = o.password || '111111a';
	// 	}
	// });
	fireKeyEvent(elUserName, 'keydown', 70);  
}

