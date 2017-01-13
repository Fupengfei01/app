app.controller("roundTables_morecontroller",function($scope,$rootScope,$timeout,$http,$location){
	$rootScope.showFooter=false;
	$rootScope.showHeader=false;
	
	var url_=$location.url().split("/")[3];
	console.log(url_)
	var json1_="../json/j-roundTables_more1.json";
	var json2_="../json/j-roundTables_more2.json";
	var json3_="../json/j-roundTables_more3.json";
	var json4_="../json/j-roundTables_more4.json";
	
	if(url_=='22'){
			json1_=json1_;
		}else if(url_=='7'){
			json1_=json2_;
		}else if(url_=='15'){
			json1_=json3_;
		}else if(url_=='9'){
			json1_=json4_;
		};
	
	$http({
		url:json1_,
		method:"get",
	}).then(function(response){
		var data=response.data;
		$scope.roundTables=data.data.roundTables;
		console.log($scope.roundTables[0].bannerPic)
		
	})
	
	$scope.doRefresh = function(){
		$timeout(function(){
        	$scope.$broadcast("scroll.refreshComplete");
		},1500);
    }
	
	$scope.loadMore=function(){	
		$timeout(function(){
            $scope.$broadcast("scroll.infiniteScrollComplete");  
        },1500);
        
	}
	
})

