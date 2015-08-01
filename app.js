$(document).ready(function(){
     var arrFrom = [];
     var arrTo =[];
     var result = [];

    $("#addSlot").click(function(){
        arrFrom.push($("#slotStart").val());
        arrTo.push($("#slotEnd").val());
    });

    $("#processSlots").click(function(){
        var startTime, endTime;
        for (var i = 0; i < arrFrom.length; i++) {
                if ((arrTo[i] < arrFrom[i+1]) || (i == arrFrom.length-1) ) {
                    endTime = arrTo[i];
                    if (i == 0) {
                        startTime = i;
                    }

                    result.push(arrFrom[startTime] +" to " + endTime);
                    startTime = i+1;
                }
        }
        alert(result);    
    });
    
});