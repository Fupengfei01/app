app.controller("readEveryDaycontroller",function($scope,$rootScope,$http){
	$rootScope.showHeader=false;
	$rootScope.showFooter=false;
	$http({
		url:"../json/f-readEveryDay.json",   //请求地址
		method:"GET",    //请求方式
	}).success(function(data){
		$scope.readlist=data;
	})
});