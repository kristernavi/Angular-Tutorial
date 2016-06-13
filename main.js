var myapp = angular.module("myapp", []);

var myapp2 = angular.module("superhero", [])

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
 
 
