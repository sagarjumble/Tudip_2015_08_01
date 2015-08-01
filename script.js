$(document).ready(function() {
	$('#button').click(function(){
		alert('helllo');
		var from1 = $('#from1').val();
		var to1 = $('#to1').val();
		var from1_zone = $('#from1_zone').val();
		var to1_zone = $('#to1_zone').val();

		var from2 = $('#from2').val();
		var to2 = $('#to2').val();
		var from2_zone = $('#from2_zone').val();
		var to2_zone = $('#to2_zone').val();

		var from3 = $('#from3').val();	
		var to3 = $('#to3').val();	
		var from3_zone = $('#from3_zone').val(); 
		var to3_zone = $('#to3_zone').val();

		var from4 = $('#from4').val();
		var to4 = $('#to4').val();
		var from4_zone = $('#from4_zone').val();
		var to4_zone = $('#to4_zone').val();

		var from5 = $('#from5').val();
		var to5 = $('#to5').val();
		var from5_zone = $('#from5_zone').val();
		var to5_zone = $('#to5_zone').val();

		var str = from1 + " " + from1_zone + " to " + to1 + " " + to1_zone;

		
	/* ------------First and sencond time interval ------- */		
		if(from1 < to1 && (from1 < from2 && to1 < from2) ){

			$('#result1').append(from1 + " " + from1_zone + " to " + to1 + " " + to1_zone);
		}
		else if(from1 < to1 && (from1 < from2 && to1 == from2) ){
			alert('equal');
			$('#result1').append(from1 + " " + from1_zone + " to " + to2 + " " + to2_zone);	
		}
		else if(from1 < to1 && (from2 < to1 && from2 < to2)){
			alert('from 2 ');
			$('#result1').append(from1 + " " + from1_zone + " to " + to2 + " " + to2_zone);	
		}
	/* ------------Second and third time interval ----------*/
		if(from2 < to2 && (from2 < from3 && to2 < from3) ){ //addeddddddddd

			$('#result1').append(from2 + " " + from2_zone + " to " + to2 + " " + to2_zone);
		}	
		else if(from2 < to2 && (from2 < from3 && to2 == from3) ){
			alert('equal');
			$('#result1').append(from2 + " " + from2_zone + " to " + to3 + " " + to3_zone);	
		}
		else if(from2 < to2 && (from3 < to2 && from3 < to3)){
			alert('from 3 ');
			$('#result1').append(from2 + " " + from2_zone + " to " + to3 + " " + to3_zone);	
		}
		/*--------------------------------------------------------------*/
		/* ------------third and fourth time interval ----------*/
		if(from3 < to3 && (from3 < from4 && to3 < from4) ){ // addedddddd

			$('#result1').append(from3 + " " + from3_zone + " to " + to3 + " " + to3_zone);
		}	
		else if(from3 < to3 && (from3 < from4 && to3 == from4) ){
			alert('equal');
			$('#result1').append(from3 + " " + from3_zone + " to " + to4 + " " + to4_zone);	
		}
		else if(from3 < to3 && (from4 < to3 && from4 < to4)){
			alert('from 4 ');
			$('#result1').append(from3 + " " + from3_zone + " to " + to4 + " " + to4_zone);	
		}*/
		/* ------------fourth and fifth time interval ----------*/
		if(from4 < to4 && (from4 < from5 && to4 < from5) ){ //addeddddddd

			$('#result1').append(from4 + " " + from4_zone + " to " + to4 + " " + to4_zone);
		}	
		else if(from4 < to4 && (from4 < from5 && to4 == from5) ){
			alert('equal');
			$('#result1').append(from4 + " " + from4_zone + " to " + to5 + " " + to5_zone);	
		}
		else if(from4 < to4 && (from5 < to4 && from5 < to5)){
			alert('from 5 ');
			$('#result1').append(from4 + " " + from4_zone + " to " + to5 + " " + to5_zone);	
		}

	});
});