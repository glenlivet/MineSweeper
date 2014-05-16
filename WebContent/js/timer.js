var Timer = function(div){
	
	this.div = div;
	this.interval;
};

Timer.prototype.work = function(){
	var self = this;
	var date = new Date();
	var baseTime = date.getTime();
	this._interval = window.setInterval(function(){
	var cur = new Date();
	var curTime = cur.getTime();
	var diff = (curTime - baseTime)/1000;
	//min
	var min = parseInt(diff/60);
	if(min >= 60){
		window.clearInterval(self._interval);
		alert('timeout');
		return;
	}
	//second
	var sec = parseInt(diff % 60);
	min = ''+min;
	sec = ''+sec;
	if(min.length<2)
		min = '0' + min;
	if(sec.length<2)
		sec = '0' + sec;
	var text = min + ':' + sec;
	//alert(self.div);
	
	$(self.div).html(text);
	}, 1000);
};

Timer.prototype.stop = function(){
	window.clearInterval(this._interval);
};