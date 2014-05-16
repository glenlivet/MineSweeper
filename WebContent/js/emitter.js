/**
 * whenever touched a mine, emitter will emit all pixels.
 */
 
 var emitted_num = 0;
 
 var Emitter = function(){
 };
 
 Emitter.prototype.emit = function(tds){
 	//var _len = tds.length;
 	//alert(typeof tds.length);
 	
 	if(typeof tds.length == 'number'){
 		var _len = tds.length;
 		//should emit all
 		for(var i=0; i<_len; i++){
 			var _td = tds[i];
 			this.show(_td);
 		}
 	}else{
 		//should just emit this one
 		var _td = tds;
 		this.show(_td);
 	}
 	
 };
 
 Emitter.prototype.show = function(td){
 	//alert("hello");
 	var _td = $(td);
 	var _isCovered = _td.hasClass('covered');
 	if(_isCovered == true){
 		//uncover it
 		_td.removeClass('covered');
 		emitted_num++;
 		//find type and add class
 		var _type = _td.attr('pixeltype');
 		_type = _type.toLowerCase();
 		_td.addClass(_type);
 		if(_type == 'hint'){
			var _num = _td.attr('num');
			_td.html(_num);
		}
 	}
 };
 
 