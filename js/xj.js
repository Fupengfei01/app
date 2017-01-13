var app=angular.module("app",['ui.router']);
		app.config(function($urlRouterProvider){
			$urlRouterProvider.otherwise("login");
		});
		app.config(function($urlMatcherFactoryProvider){
			$urlMatcherFactoryProvider.caseInsensitive(true);
		});
		app.config(['$stateProvider',function($stateProvider){
			$stateProvider
			.state("login",{
				url:"/login",
				templateUrl:"./login.html"
			})
			.state("register",{
				url:"/register",
				templateUrl:"./register.html"
			})
			.state("my",{
				url:"/my",
				templateUrl:"./my.html"
			})
			.state("terms",{
				url:"/terms",
				templateUrl:"./terms.html"
			})
		}])
			
			app.controller("loginCtrl",function($scope){
				$scope.title="登录",
				$scope.title01="注册"
			})
//			app.controller("registerCtrl",function($scope){
//				$scope.title="登录",
//				$scope.title01="注册"
//				
//			})

			app.controller("myController",function($scope){
				
			})
			app.controller("termsController",function($scope){
				
			})
		app.controller('RegisterCtrl', function($scope) { 
        $scope.userdata = {};
        $scope.submitForm = function() {
            console.log($scope.userdata);
            if ($scope.loginForm.$invalid) {
                alert('请检查您的信息')
            } else {
                alert('注册成功！')
            }

        }
   })
   app.directive('compare', function() {

        var o = {};
        o.strict = 'AE';
        o.scope = {
            orgText: '=compare'
        }
        o.require = 'ngModel';
        o.link = function(scope, elem, att, con) {
            con.$validators.compare = function(v) {
                return v == scope.orgText;
            }
            scope.$watch('orgText', function() {
                con.$validate();
            });
        }
        return o;
    });
			