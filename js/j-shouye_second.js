app.controller("shouye_secondcontroller",function($scope,$rootScope,$timeout,$http,$location){
	$rootScope.showFooter=false;
	$rootScope.showHeader=false;
	//console.log($location.absUrl())
	var url_=$location.url().split("/")[3];
	//console.log(url_)
	var json1_="../json/j-shouye_second.json";
	var json2_="../json/j-shouye_second3.json";
	var json3_="../json/j-shouye_second2.json";
	var json4_="../json/j-shouye_second4.json";
	if(url_=='xlcz'){
			json_=json1_;
		}else if(url_=='yyqm'){
			json_=json2_;
		}else if(url_=='ysxy'){
			json_=json3_;
		}else if(url_=='zrkx'){
			json_=json4_;
		};
	$scope.num=0;
	$http({
		url:json_,
		method:"get",
	}).then(function(response){
		var data=response.data;
		$scope.roundTables=data.data.roundTables;
		console.log($scope.roundTables)
		$scope.masterPieces=data.data.masterPieces.slice(0,5);
		$scope.pic=data.data.masters;
	})
	
	
	
	$scope.doRefresh = function(){
        $scope.$broadcast("scroll.refreshComplete");

    }
	
	$scope.loadMore=function(){
		
		$timeout(function(){
            $scope.num++;
            $http({
				url:json_,
				method:"get",
			}).then(function(response){	
				var data=response.data;
				
				//console.log(data)
				$scope.masterPieces=data.data.masterPieces.slice(0,$scope.num+5);
			})
            $scope.$broadcast("scroll.infiniteScrollComplete");

            
        },1500);
        
	}
})