
var Explorer = function(emitter){
	this.emitter = emitter;
};

Explorer.prototype.explore = function(td){
	uncoverAround(this.emitter, td);

};

function uncoverAround(emitter, td){
	var _centre = $(td);
	var _row = _centre.attr('row_id');
	var _col = _centre.attr('col_id');
	var _col_head = parseInt(_col) - 1;
	var _col_end = parseInt(_col) + 1;
	if(_col_head < 0)
		_col_head++;
	if($('td[col_id='+_col_end+']').length == 0)
		_col_end--;
	var _row_head = parseInt(_row) - 1;
	var _row_end = parseInt(_row) + 1;
	if(_row_head <0){
		_row_head++;
	}
	if($('td[row_id='+_row_end+']').length == 0)
		_row_end--;
	for(var j=_row_head; j<=_row_end;j++)
		for(var i = _col_head; i <= _col_end; i++){
			var _tar = $('td[row_id='+j+'][col_id='+i+']')[0];
			if($(_tar).hasClass('covered')){
				emitter.emit(_tar);
				if($(_tar).attr('pixeltype') == 'EMPTY')
					uncoverAround(emitter, _tar);
			}
		}
}

