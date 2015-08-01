$(document).ready(function(){
	 var arr = [];
	 var arr1 =[];
	 var result = [];
    $("#btn").click(function(){
		arr.push($("#myTime").val());
		arr1.push($("#myTime1").val());
        alert(arr+"   "+arr1);
    });
	$("#subt").click(function(){
		var start, end;
		for (var i = 0; i < arr.length; i++) {
				if ((arr1[i] < arr[i+1]) || (i == arr.length-1)) {
					end = arr1[i];
					if (i == 0){
				    start = i;
					}
					result.push(arr[start]+" to "+ end);
					start = i+1;
				}
				//alert(result);	
		}
		alert(result);	
    });
	
});


/*

function myFunction() {   
		var input = document.getElementById("txtid").value;
		var arr=[];
		for (var i=0; i< input; i++) {
			var ar = prompt("Please enter time interval in hh:mm - hh:mm", "");
			arr[i] = ar;
		}
		alert(arr);
		
		
	}*/