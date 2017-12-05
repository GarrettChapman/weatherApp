angular.module('weatherApp').controller('weatherCtrl', function($scope, $http){

var vm = $scope;

  vm.test = 'most triumphant';

  vm.channelInfo = {
    heading: "Open Weather API ",
    subHeading1: "Your Local Weather",

  };



  $http.get("http://ip-api.com/json").then(function(data){
    // console.log(data);
    $scope.lat = data.data.lat;
    $scope.lon = data.data.lon;



    var apiKey = "7208bd19fb5457c0fd0dc403ca2594e6";

    var openWeatherURL = "http://api.openweathermap.org/data/2.5/weather?lat="+ $scope.lat + "&lon="+$scope.lon+ "&appid=" +apiKey;

console.log(openWeatherURL);

    $http.get(openWeatherURL).then(function(data){
      console.log(data);
      $scope.description = data.data.weather[0].description;
      $scope.speed = (2.237 * data.data.wind.speed).toFixed(1) + " mph";
      $scope.name= data.data.name;
      $scope.temp= data.data.main.temp;

      $scope.fTemp=($scope.temp*(9/5)-459.67).toFixed(1) + ' (°F)';
      $scope.cTemp=($scope.temp-273).toFixed(1) + ' (°C)';
      $scope.icon= "http://openweathermap.org/img/w/" + data.data.weather[0].icon + ".png";
    })
    .catch(function() {
  // handle errors
    });
  });

});


// var classApp = angular.module('weatherApp', []);
//
//
// classApp.controller('weatherCtrl', function(vm){
//   var vm = vm;
//
//   vm.test = "most triumphant"
// })
