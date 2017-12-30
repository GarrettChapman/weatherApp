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
      $scope.city = data.data.main.name;
      $scope.humidity = data.data.main.humidity;

      $scope.fTemp=($scope.temp*(9/5)-459.67).toFixed(1) + ' (°F)';
      $scope.cTemp=($scope.temp-273).toFixed(1) + ' (°C)';

        $scope.icon= "http://openweathermap.org/img/w/" + data.data.weather[0].icon + ".png";

        switch($scope.description){
          case 'mist':{
            $scope.weatherBackground = {
              "background": "url('https://images.unsplash.com/photo-1438803235109-d737bc3129ec?auto=format&fit=crop&w=1332&q=80')",
              "background-size": "cover"
            };
            break;
          }

          case 'rain':{
            $scope.weatherBackground = {
              "background": "url('https://images.unsplash.com/photo-1486016006115-74a41448aea2?auto=format&fit=crop&w=747&q=80')",
              "background-size": "cover"
            };
            break;

          }

          case 'shower rain':{
            $scope.weatherBackground = {
              "background": "url('https://images.unsplash.com/photo-1434118489318-42a0e62c6235?auto=format&fit=crop&w=667&q=80)",
              "background-size": "cover"

            };
            break;
          }

          case 'scattered clouds':{
            $scope.weatherBackground = {
              "background": "url('https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?auto=format&fit=crop&w=750&q=80')",
              "background-size": "cover"

            };
            break;
          }

          case 'broken clouds':{
            $scope.weatherBackground = {
              "background": "url('https://images.unsplash.com/photo-1432059964050-d4eba2ef368a?auto=format&fit=crop&w=889&q=80')",
              "background-size": "cover"
            };
            break;

          }
        case 'few clouds': {
          $scope.weatherBackground = {
            "background": "url('https://images.unsplash.com/photo-1505224526312-64368469c1f0?auto=format&fit=crop&w=334&q=80')",
            "background-size": "cover"

          };
          break;
        }

        case 'overcast clouds': {
          $scope.weatherBackground = {
            "background": "url('https://images.unsplash.com/photo-1499956827185-0d63ee78a910?auto=format&fit=crop&w=750&q=80')",
            "background-size": "cover"

          };
          break;
        }


        case 'thunderstorm':{
          $scope.weatherBackground = {
            "background": "url('https://images.unsplash.com/photo-1511289081-d06dda19034d?auto=format&fit=crop&w=338&q=80')",
            "background-size": "cover"

          };
          break;
        }


          case 'clear sky':{
            $scope.weatherBackground = {
              "background": "url('https://images.unsplash.com/photo-1490194490614-689f9bf126b0?auto=format&fit=crop&w=334&q=80')",
              "background-size": "cover"

            };
            break;
          }


          case 'sunny':{
            $scope.weatherBackground = {
              "background": "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=889&q=80')",
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
