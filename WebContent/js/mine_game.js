//pixels remained uncovered
var remCovered;
//mines remained
var minesLeft;
var totalPixels;
var totalMines;
var wrongFlags = 0;
var flaggedNum = 0;
var emitter;
var explorer;
var hinter;
var timer;

$(document).ready(function(){
	
	totalMines = $('td[pixeltype="MINE"]').length;
	minesLeft = totalMines;
	totalPixels = $('td').length;
	remCovered = totalPixels;
	
	
	emitter = new Emitter();
	explorer = new Explorer(emitter);
	hinter = new Hinter(explorer);
	
	var timeDiv = $('#time_used')[0];
	timer = new Timer(timeDiv);
	
	$('body').on('contextmenu', function(e){
		e.preventDefault();
	});
	$('#begin_btn').one('click', init);
	
	/*
	timer.work();
	
	//left click handle
	$('td').on('click', function(e){
		//alert('aaa');
		var _target = $(this);
		var _type = _target.attr('pixeltype');
		var _isCovered = _target.hasClass('covered');
		//click on covered pixel
		//open it
		if(_isCovered){
			//if is a mine, game over
			if(_type == 'MINE'){
				emitter.emit($('td'));
				gameOver = true;
				//game over handler
			}else {
				emitter.emit(this);
			}
		}
		//click on uncovered pixel
		else {
			if(_type == 'EMPTY'){
				//uncover the pixel around
				explorer.explore(this);
			}else{
				//give hint
				hinter.giveHint(this);
			}
		}
		//alert('emitted_num: ' + emitted_num);
		remCovered = totalPixels - emitted_num - flaggedNum;
		minesLeft = totalMines - flaggedNum;
		if(remCovered == minesLeft){
			var _left = $('td.covered');
			for(var i=0; i< _left.length; i++){
				var _tar = _left[i];
				addFlagTo(_tar);
			}
			alert('win');
			return;
		}
		//alert(gameOver);
		if(gameOver == true){
			emitter.emit($('td'));
			alert('game over!');		
		}
	});
	//right click handle
	$('td').on('mouseup', function(e){
		e.preventDefault();
		var _tar = $(this);
		if(e.which == 3){
			var _hasCover = _tar.hasClass('covered');
			if(_hasCover){
				if(flaggedNum == totalMines){
					alert('No flags left!');
					return;
				}
				addFlagTo(_tar);
				//alert(wrongFlags); 
				if(wrongFlags == 0 && flaggedNum == totalMines){
					emitter.emit($('td'));
					alert('win');
				}
				return;
			}
			var _hasFlag = _tar.hasClass('flag');
			if(_hasFlag){
				removeFlagOn(_tar);
				return;
			}
		}
		
	});
	*/
	
});

function init(e){
	$('#begin_btn').addClass('disabled');
	timer.work();
	
	//left click handle
	$('td').on('click', function(e){
		//alert('aaa');
		var _target = $(this);
		var _type = _target.attr('pixeltype');
		var _isCovered = _target.hasClass('covered');
		//click on covered pixel
		//open it
		if(_isCovered){
			//if is a mine, game over
			if(_type == 'MINE'){
				emitter.emit($('td'));
				gameOver = true;
				//game over handler
			}else {
				emitter.emit(this);
			}
		}
		//click on uncovered pixel
		else {
			if(_type == 'EMPTY'){
				//uncover the pixel around
				explorer.explore(this);
			}else{
				//give hint
				hinter.giveHint(this);
			}
		}
		//alert('emitted_num: ' + emitted_num);
		remCovered = totalPixels - emitted_num - flaggedNum;
		minesLeft = totalMines - flaggedNum;
		if(remCovered == minesLeft){
			var _left = $('td.covered');
			for(var i=0; i< _left.length; i++){
				var _tar = _left[i];
				addFlagTo(_tar);
			}
			alert('win');
			return;
		}
		//alert(gameOver);
		if(gameOver == true){
			emitter.emit($('td'));
			alert('game over!');		
		}
	});
	//right click handle
	$('td').on('mouseup', function(e){
		e.preventDefault();
		var _tar = $(this);
		if(e.which == 3){
			var _hasCover = _tar.hasClass('covered');
			if(_hasCover){
				if(flaggedNum == totalMines){
					alert('No flags left!');
					return;
				}
				addFlagTo(_tar);
				//alert(wrongFlags); 
				if(wrongFlags == 0 && flaggedNum == totalMines){
					emitter.emit($('td'));
					alert('win');
				}
				return;
			}
			var _hasFlag = _tar.hasClass('flag');
			if(_hasFlag){
				removeFlagOn(_tar);
				return;
			}
		}
		
	});
	
}

function addFlagTo($tar){
	$tar.removeClass('covered');
	$tar.addClass('flag');
	if($tar.attr('pixeltype') != 'MINE')
		wrongFlags++;
	flaggedNum++;
}

function removeFlagOn($tar){
	$tar.removeClass('flag');
	flaggedNum--;
	if($tar.attr('pixeltype') != 'MINE')
		wrongFlags--;
	$tar.addClass('covered');
}