var module = angular.module('app', []);

module.controller('Timer', function($scope,$filter){
	$scope. time ={};
		$scope.allData = [];
	
	
	$scope.add = function(){
		var selectedFromTime = moment($scope.time.from).format("HH:mm");
		var selectedToTime = moment($scope.time.to).format("HH:mm");
		var selectedTime = {
			"from": selectedFromTime,
			"to": selectedToTime
		};
		$scope.allData.push(selectedTime);
		
		$scope.time.to = '';
		$scope.time.from = '';
		
		
	};
	$scope.process = function(){
		$scope.newSlot =[];
		var count = 0;
		var newSlotData;
		var first = true;
		$scope.sortedFrom = $filter('orderBy')($scope.allData, 'from');
		for(var i=0; i<$scope.sortedFrom.length; i++){
			var from = $scope.sortedFrom[i].from;
			var to = "";
			var toh = $scope.resolveHour($scope.sortedFrom[i].to);
			var tom = $scope.resolveMinute($scope.sortedFrom[i].to);
			for(var count=i+1; count<$scope.sortedFrom.length; count++){
				first = false;
				var next = $scope.sortedFrom[count];
				var nexth = $scope.resolveHour(next.from);
				var nextm = $scope.resolveMinute(next.from);
				if(toh <= nexth && tom <= nextm){		
					i++;
					continue;
				}
				else{
					to = next.to;
				}
				
				 newSlotData = {
					"from": from,
					"to": to
				};
				$scope.newSlot.push(newSlotData);
								
				
			}
			if(count == i+1 && i != 0)
			{
				if(newSlotData.to != $scope.sortedFrom[i].to)
				{
				 newSlotData = {
					"from": from,
					"to": $scope.sortedFrom[i].to
					};
					$scope.newSlot.push(newSlotData);
				}
			}
			if(first)
			{
				newSlotData = {
					"from": from,
					"to": $scope.sortedFrom[i].to
				};
				$scope.newSlot.push(newSlotData);
			}
			
		}
		
	}
	
	$scope.resolveHour = function(selectedTime){
		var getTimeArray = selectedTime.split(":");
		var getHour = getTimeArray[0];
		return getHour;
	};

	$scope.resolveMinute = function(selectedTime){
		var getTimeArray = selectedTime.split(":");
		var getMinute = getTimeArray[1];
		return getMinute;
	};

})