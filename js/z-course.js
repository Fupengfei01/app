app.controller("coursecontroller",function($scope,$http,$timeout){	
	$scope.num=1;
	$http.get("../json/z-course.json").then(function(res){
		$scope.items = res.data.slice(0,$scope.num*10);				
	});


	$scope.doRefresh = function(){
	  	console.log("shux")
		$timeout(function(){
			$http.get("../json/z-course.json").then(function(res){
	//			console.log(res.data);
				$scope.items = res.data.slice(0,10);
				$scope.$broadcast("scroll.refreshComplete");
			})
		},1500)
	  	
	};
	$scope.loadMore=function(){
		$timeout(function(){
			$http.get("../json/z-course.json").then(function(res){			
				$scope.num++; 
				$scope.items = res.data.slice(0,$scope.num*10);
	//			console.log($scope.items);
				$scope.$broadcast("scroll.infiniteScrollComplete");
			})
		},1500)
	};
 
 
	 $scope.flagLeft=false;
	 $scope.flagRight=false;
	 $scope.changeshow=function(){
	 	$scope.flagLeft=!$scope.flagLeft;
	 	$scope.flagRight=false;
	 };
	 $scope.changehide=function(){
	 	$scope.flagRight=!$scope.flagRight;	
	 	$scope.flagLeft=false;
	 };
	 $scope.sortLeft="全部分类";
	 $scope.allSort="全部分类";
	 $scope.natural="自然科学";
	 $scope.sprit="心灵成长";
	 $scope.english="英语启蒙";
	 $scope.art="艺术素养";
	 $scope.sortRight="全部对象";
	 $scope.allobj="全部对象";
	 $scope.parents="家长";
	 $scope.children="孩子";
	 $scope.pass=function(datas){
	 	$scope.sortLeft=datas;
	 	if($scope.sortLeft=="全部分类"){
	 		$http.get("../json/z-course.json").then(function(res){
				$scope.items = res.data.slice(0,$scope.num*10);				
			});
	 	}else{		 		
		   	$http.get("../json/z-course.json").then(function(res){
				var arr=[];
				angular.forEach(res.data,function(item,index){	
		//			console.log(res.data);
					if(item.category==datas){
		//				console.log(11)
						arr.push(item);
					}					
				});
				$scope.items=arr;
				$scope.doRefresh = function(){
					$timeout(function(){
						$scope.items=arr;
						$scope.$broadcast("scroll.refreshComplete");
					},1500)					
				};
				$scope.loadMore=function(){
					$timeout(function(){
						$scope.items=arr;
						$scope.$broadcast("scroll.infiniteScrollComplete")
					},1500)					
				};
		//		$("ion-infinite-scroll").remove();
				var arr1=[];
				$scope.pass1=function(datas1){
					$scope.sortRight=datas1;
					if($scope.sortRight=="全部对象"){
						$scope.items=arr;
					}else{						
						angular.forEach(arr,function(item,index){
							if(item.audience==datas1){
								arr1.push(item);							
							}					
						});
						$scope.items=arr1;
						$scope.doRefresh = function(){
							$timeout(function(){
								$scope.items=arr1;
								$scope.$broadcast("scroll.refreshComplete");
							},1500)					
						};
						$scope.loadMore=function(){
							$timeout(function(){
								$scope.items=arr1;
								$scope.$broadcast("scroll.infiniteScrollComplete")
							},1500)						
						};
					}
				}
			});
		}
	 }
	 $scope.pass1=function(datas1){
	 	$scope.sortRight=datas1;
	 	if($scope.sortRight=="全部对象"){
	 		$http.get("../json/z-course.json").then(function(res){
				$scope.items = res.data.slice(0,$scope.num*10);				
			});
	 	}else{
	 		$http.get("../json/z-course.json").then(function(res){
				var arr=[];
				angular.forEach(res.data,function(item,index){	
		//			console.log(res.data);
					if(item.audience==datas1){
		//				console.log(11)
						arr.push(item);
					}					
				});
				$scope.items=arr;
				$scope.doRefresh = function(){
					$timeout(function(){
						$scope.items=arr;
						$scope.$broadcast("scroll.refreshComplete");
					},1500)					
				};
				$scope.loadMore=function(){
					$timeout(function(){
						$scope.items=arr;
						$scope.$broadcast("scroll.infiniteScrollComplete")
					},1500)					
				};
		//		$("ion-infinite-scroll").remove();
				var arr1=[];
				$scope.pass=function(datas){
					$scope.sortLeft=datas;
					if($scope.sortLeft=="全部分类"){
						$scope.items=arr;
					}else{
						angular.forEach(arr,function(item,index){
							if(item.category==datas){
								arr1.push(item);
							}					
						});
						if(arr1.length){
							$scope.items=arr1;
							
						}else{
							return false;
						}
						$scope.doRefresh = function(){
								$timeout(function(){
									$scope.items=arr1;
									$scope.$broadcast("scroll.refreshComplete");
								},1500)					
							};
							$scope.loadMore=function(){
								$timeout(function(){
									$scope.items=arr1;
									$scope.$broadcast("scroll.infiniteScrollComplete")
								},1500)						
						};
					}					
				}
			});
	 	}
	 }
	//$("body").not($(".father-nav")[0]).click(function(){
	//	console.log('aaaa');
	//	$scope.flagLeft=false;
	// 	$scope.flagRight=false;
	// 	$scope.$apply();
	//})
 
})


