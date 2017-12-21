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

//       console.log(data);

      $scope.description = data.data.weather[0].description;
      $scope.speed = (2.237 * data.data.wind.speed).toFixed(1) + " mph";
      $scope.name= data.data.name;
      $scope.temp= data.data.main.temp;

      $scope.fTemp=($scope.temp*(9/5)-459.67).toFixed(1) + ' (°F)';
      $scope.cTemp=($scope.temp-273).toFixed(1) + ' (°C)';

        $scope.icon= "http://openweathermap.org/img/w/" + data.data.weather[0].icon + ".png";

        switch($scope.description){
          case 'mist':{
            $scope.weatherBackground = {
              "background": "url('https://static.pexels.com/photos/4827/nature-forest-trees-fog.jpeg')",
              "background-size": "cover"

            };
            break;
          }

          case 'rain':{
            $scope.weatherBackground = {
              "background": "url('https://static.pexels.com/photos/459451/pexels-photo-459451.jpeg')",
              "background-size": "cover"

            };
            break;

          }

          case 'scattered clouds':{
            $scope.weatherBackground = {
              "background": "url('https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb')",
              "background-size": "cover"

            };
            break;

          }

          case 'clear sky':{
            $scope.weatherBackground = {
              "background": "url('https://www.pexels.com/photo/blue-sky-blur-clear-sky-color-281260/')",
              "background-size": "cover"

            };
            break;

          }




            default:
            $scope.weatherBackground= {
              "background": "url('https://static.pexels.com/photos/133953/pexels-photo-133953.jpeg')",
              "background-size": "cover"
            };

            break;

        }


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
