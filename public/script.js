//var scotchApp = angular.module('scotchApp', []);
var app = angular.module('app', ['ui.router','ngAnimate', 'ngSanitize','ui.bootstrap', 'ui.bootstrap.datetimepicker', 'ngImgCrop','satellizer'])
  .config(function($stateProvider, $urlRouterProvider) {


    $stateProvider.state('todo', {
        url: '/todo',
        templateUrl: 'template/todo.html',
         controller: 'todoController'

      })
      .state('login', {
        url: '/login',
        templateUrl: 'template/login.html',
         controller: 'loginController'

      }).state('signup', {
        url: '/signup',
        templateUrl: 'template/signup.html',
         controller: 'signupController',
        // onEnter: function() {
        //   console.log('inside signup');
        // }
      })
    $urlRouterProvider.otherwise('/login');

  })
       app.directive('contenteditable1', [function() {
    return {
        require: '?ngModel',
        scope: {
        },
        link: function(scope, element, attrs, ctrl) {
            // view -> model (when div gets blur update the view value of the model)
            element.bind('blur', function() {
                scope.$apply(function() {
                    ctrl.$setViewValue(element.html());
                });
            });

            // model -> view
            ctrl.$render = function() {
                element.html(ctrl.$viewValue);
            };

            // load init value from DOM
            ctrl.$render();

            // remove the attached events to element when destroying the scope
            scope.$on('$destroy', function() {
                element.unbind('blur');
                element.unbind('paste');
                element.unbind('focus');
            });
        }
    };
}]);
  // window.fbAsyncInit = function() {
  //   FB.init({
  //     appId            : '1689573841352159',
  //     autoLogAppEvents : true,
  //     xfbml            : true,
  //     version          : 'v2.9'
  //   });
  //   FB.AppEvents.logPageView();
  // };
  //
  // (function(d, s, id){
  //    var js, fjs = d.getElementsByTagName(s)[0];
  //    if (d.getElementById(id)) {return;}
  //    js = d.createElement(s); js.id = id;
  //    js.src = "//connect.facebook.net/en_US/sdk.js";
  //    fjs.parentNode.insertBefore(js, fjs);
  //  }(document, 'script', 'facebook-jssdk'));
