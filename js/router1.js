var app=angular.module("app",['ui.router','ionic']);
app.run(function($rootScope,$log){
	$rootScope.title="推荐";
	$rootScope.$on("$stateChangeSuccess",function(e){
		$rootScope.showFooter= true;
		$rootScope.showHeader=true;
	})
})
app.config(function($stateProvider){
	$stateProvider
	.state("tabs",{
		url:"/tabs",
		templateUrl:"tabs.html",
//		controller:"tabscontroller",
//		controllerAs:"tabsctrl",
	})
	.state("tabs.nominate",{
		url:"/nominate",
		views:{
			"tabs-nominate":{
				templateUrl:"nominate.html",
				controller:"nominatecontroller",
				controllerAs:"nominatectrl",
			}
		}
		
	})
	.state("tabs.intelligent",{
		url:"/intelligent",
		views:{
			"tabs-intelligent":{
				templateUrl:"intelligent.html",
				controller:"intelligentcontroller",
//				controllerAs:"intelligentctrl",
			}
		}
		
	})
	.state("tabs.course",{
		url:"/course",
		views:{
			"tabs-course":{
				templateUrl:"course.html",
				controller:"coursecontroller",
//				controllerAs:"coursectrl",


			}
		}
		
	})
	.state("tabs.mine",{
		url:"/mine",
		views:{
			"tabs-mine":{
				templateUrl:"mine.html",
//				controller:"minecontroller",
//				controllerAs:"minectrl",
			}
		}
		
	})
	.state("tabs.shouye_second",{
		url:"/shouye_second",
		views:{
			"tabs-nominate":{
				templateUrl:"shouye_second.html",
				controller:"shouye_secondcontroller",
//				controllerAs:"nominatectrl",
			}
		}
		
	})
	
});
app.controller("tabscontroller",function($scope){
	
});

app.config(function($urlRouterProvider){
	$urlRouterProvider.otherwise("/tabs/nominate");
});
app.config(function($urlMatcherFactoryProvider){
	$urlMatcherFactoryProvider.caseInsensitive(true);
});
