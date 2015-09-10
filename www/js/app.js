// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova'])

/*.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})*/

  /*.config(function($cordovaFacebookProvider) {
    var appID = 1693975357503526;
    var version = "v2.0"; // or leave blank and default is v2.0
    $cordovaFacebookProvider.browserInit(appID, version);
  })*/

  .controller('MyCtrl', function($scope, $ionicPlatform, $cordovaFacebook, $ionicLoading, $rootScope) {
    $ionicPlatform.ready(function () {
      $scope.logIn = function () {
        $ionicLoading.show({template: "Logging..."});
        $cordovaFacebook.login(["public_profile", "email", "user_friends", "user_birthday"])
          .then(function(success) {
            $cordovaFacebook.api("/me?fields=email,first_name,last_name,name,bio,birthday,picture", [])
              .then(function(data) {
                $rootScope.user = data
                $ionicLoading.hide();
                localStorage.user = JSON.stringify(success);
                console.log($rootScope.user)
              }, function (error) {
                console.log(error);
              });

          }, function (error) {
            console.log(error);
            // error
          });

      }


      /* var options = {
       method: "feed",
       link: "http://example.com",
       caption: "Such caption, very feed."
       };
       $cordovaFacebook.showDialog(options)
       .then(function(success) {
       success
       }, function (error) {
       // error
       });*/





      /* $cordovaFacebook.getLoginStatus()
       .then(function(success) {
       /!*
       { authResponse: {
       userID: "12345678912345",
       accessToken: "kgkh3g42kh4g23kh4g2kh34g2kg4k2h4gkh3g4k2h4gk23h4gk2h34gk234gk2h34AndSoOn",
       session_Key: true,
       expiresIn: "5183738",
       sig: "..."
       },
       status: "connected"
       }
       *!/
       }, function (error) {
       // error
       });

       $cordovaFacebook.getAccessToken()
       .then(function(success) {
       // success
       }, function (error) {
       // error
       });*/
      $scope.logOut = function () {
        $cordovaFacebook.logout()
          .then(function (success) {
            console.log('logout' + success);
          }, function (error) {
            console.log(error);
            // error
          });
      }


    })
  })


