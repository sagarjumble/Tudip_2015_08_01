$('#mergeTime').on('click', function(){
	var from = [],
		to = [],
		resultfrom = [],
		resultto = [];
	$("input[name='usertime1']").each(function (i,v) {
    	from.push(this.value);
	});
	$("input[name='usertime2']").each(function (i,v) {
    	to.push(this.value);
	});

	for(var j = 0; j < from.length-1; j++){
		var fromarr1 = new Array();
		var fromarr2 = new Array();
		fromarr1 = from[j].split(":");
		fromarr2 = from[(j+1)].split(":");
		var toarr1 = new Array();
		var toarr2 = new Array();
		toarr1 = to[j].split(":");
		toarr2 = to[(j+1)].split(":");
		if(toarr1[0] === fromarr2[0]){	
			if(toarr1[0] < toarr2[0] ){
				resultfrom.push(from[j]);
				resultto.push(to[j+1]);
			}else if(toarr1[0] == toarr2[0] && toarr1[(1)] <= toarr2[(1)]){
				resultfrom.push(from[j]);
				resultto.push(to[j+1]);
			}
		} else if(toarr1[0] >= fromarr2[0]){
			if(toarr2[0] == toarr1[0]){
				if(toarr2[1]>toarr1[1]){
					resultfrom.push(from[j]);
					resultto.push(to[j+1]);
				}else{
					resultfrom.push(from[j]);
					resultto.push(to[j]);
				}

			} else if(toarr2[0] > toarr1[0]){
				resultfrom.push(from[j]);
				resultto.push(to[j+1]);
			} 
		}

	}
	for(var k=0; k < resultfrom.length; k++ )
		console.log(resultfrom[k] + "->" + resultto[k]);
});