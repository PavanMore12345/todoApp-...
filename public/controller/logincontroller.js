// var app = angular.module('scotchApp', []);
app.controller('loginController', function($scope,$location,loginService,googleloginService,$state) {
            $scope.loginPage = function() {
              console.log("SDfssds");
                var user = $scope.user;
                console.log(user);
                var httpobj = loginService.loginPage(user);
                httpobj.then(function(response)
                 {
                    if(response.data.status)
                    {
                    //$state.go("home");
                     toastr.success('login  successfully');
                    alert("login success");
                    $state.go("todo");
                    // $state.go("todopage");
                  }
                  else {
                    // console.log("fgfgfd");
                    // $location.path("/signup")
                     toastr.error('Something is wrong');
                    $state.go("login");
                    $scope.user="";
                  }
                    // $scope.user="";
                }, function(response) {
                    // this function handles error
                });
            }
$scope.google=function(){
  var httpobj = googleloginService.google();
  httpobj.then(function(response)
   {
console.log(response);
   })
}

          });
          app.service("loginService", function($http) {
              this.loginPage = function(user) {
                  return $http({
                      url: "/login",
                      method: "post",
                      data: user
                  });
              }
          });
          app.service("googleloginService", function($http) {
              this.loginPage = function() {
                  return $http({
                      url: "/google/callback",
                      method: "get",
                      // data: user
                  });
              }
          });
