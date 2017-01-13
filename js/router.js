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
		controller:"tabscontroller",
		controllerAs:"tabsctrl",
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
	.state("tabs.shouye_second",{
		url:"/shouye_second/:id?",
		views:{
			"tabs-nominate":{
				templateUrl:"shouye_second.html",
				controller:"shouye_secondcontroller",
//				controllerAs:"nominatectrl",
			}
		}
		
	})
	.state("tabs.zdetails",{
		url:"/z-details/:id",
		views:{
			"course-details":{
				templateUrl:"z-details.html",		
				controller:"zdetailscontroller",
				controllerAs:"zdetailsctrl",
			}
		}
	})
	.state("tabs.listenEveryDay",{
		url:"/f-listenEveryDay",
		views:{
			"tabs-nominate":{
				templateUrl:"listenEveryDay.html",		
				controller:"listenEveryDaycontroller",
				controllerAs:"listenEveryDayctrl",
			}
		}
	})
	.state("tabs.readEveryDay",{
		url:"/f-readEveryDay",
		views:{
			"tabs-nominate":{
				templateUrl:"readEveryDay.html",		
				controller:"readEveryDaycontroller",
				controllerAs:"readEveryDayctrl",
			}
		}
	})
	.state("tabs.roundTables_more",{
		url:"/roundTables_more/:id",
		views:{
			"roundTables_more":{
				templateUrl:"roundTables_more.html",		
				controller:"roundTables_morecontroller",
//				controllerAs:"zdetailsctrl",
			}
		}
	})
	.state("tabs.inteldel",{
		url:"/intel-detail/:delId",
		views:{
			"tabs-intelligent":{
				templateUrl:"intel-detail.html",
				controller:"inteldelcontroller",
				controllerAs:"inteldelctrl",
			}
		}
	})
	.state("tabs.meeting",{
		url:"/meeting/:userId",
		views:{
			"tabs-intelligent":{
				templateUrl:"meeting.html",
				controller:"meetingcontroller",
				controllerAs:"meetingctrl",
			}
		}
	})
	.state("tabs.talk",{
		url:"/talk/:id?",
		views:{
			"tabs-intelligent":{
				templateUrl:"talk.html",
				controller:"talkcontroller",
				controllerAs:"talkctrl",
			}
		}
	})
	.state("tabs.register",{
		url:"/register",
		views:{
			"tabs-register":{
				templateUrl:"register.html",		
				controller:"registerController",
				controllerAs:"registerCtrl",
			}
		}
	})
	
	.state("tabs.mine",{
		url:"/mine",
		views:{
			"tabs-mine":{
				templateUrl:"mine.html",		
				controller:"mineController",
				//controllerAs:"mineCtrl",
			}
		}
	})
	.state("tabs.terms",{
		url:"/terms",
		views:{
			"tabs-terms":{
				templateUrl:"terms.html",		
				controller:"termsController",
				controllerAs:"termsCtrl",
			}
		}
	})
	.state("tabs.login",{
		url:"/login",
		views:{
			"tabs-login":{
				templateUrl:"login.html",		
				controller:"loginController",
				controllerAs:"loginCtrl",
			}
		}
	})

	
});
app.controller("tabscontroller",function($scope,$rootScope){
	this.mark=function(event){
		var eve=event.target;
		$rootScope.title=$(eve).parent().find("a").html();
	}
	this.phone=function(){
		location.href="saoyisao.html";
	}
});

app.config(function($urlRouterProvider){
	$urlRouterProvider.otherwise("/tabs/nominate");
});
app.config(function($urlMatcherFactoryProvider){
	$urlMatcherFactoryProvider.caseInsensitive(true);
});
app.filter("trustUrl", ['$sce', function ($sce) {
    return function (recordingUrl) {
        return $sce.trustAsResourceUrl(recordingUrl);
    };
}]);