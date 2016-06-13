var myapp = angular.module("myapp", [])

var myapp2 = angular.module("superhero", [])
var myapp3 = angular.module("behaviorApp", [])


myapp3.directive("enter", function () {
		
		return function (scope,element) {
			element.bind("mouseenter",function(){
				console.log("Im inside of you!");
			})
			
		}
		
	}


)


myapp3.directive("leave", function () {

		return function (scope,element) {
			element.bind("mouseleave",function(){
				console.log("Im leaving of you!");
			})

		}

	}


)
myapp2.directive("superman",function(){
		return {
			restrict: "E",
			template: "<div>Im here to save the day</div>"
		}
	}

)
 myapp.controller('FirstCtrl',function($scope) {
    $scope.data= {message:"hello"};
  });
  
 myapp.factory('Avengers',function()
 {
	 var Avengers = {};
	 Avengers.cast = [
	 {
		 name: "Clark Gregg",
		 character: "Agent Phil Coulson"
	 },
	 {
		 name: "Stellan Skarsgard",
		 character: "Selvig"
	 },
	 {
		 name: "Samuel L Jackson",
		 character: "Pepper Potts"
	 }
	 ];
	 return Avengers;
	 
 } )
 
 

  myapp.controller('AvengersCtrl',function($scope,Avengers) {
     $scope.avengers = Avengers;
  });
 
 
