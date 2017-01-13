app.controller("listenEveryDaycontroller",function($scope,$rootScope,$http){
	$rootScope.showHeader=false;
	$rootScope.showFooter=false;
	$http({
		url:"../json/f-listenEveryDay.json",   //请求地址
		method:"GET",    //请求方式
	}).success(function(data){
		$scope.listenlist=data;
	})
});