app.controller("zdetailscontroller",function($scope,$rootScope,$stateParams,$http){
	$rootScope.showFooter=false;
	$rootScope.showHeader=false;
	var that=this;
	$scope.id=$stateParams.id;
	$http.get("../json/z-course.json").then(function(res){
		angular.forEach(res.data,function(item,index){	
//			console.log(res.data);
			if(item._id==$scope.id){
//				console.log(11)
				$scope.items=item.curriculum;
				$scope.itemsZ=item;
			}					
		});
	});	
	$scope.time=function(times){
		var	S,M;
		S=Math.floor(times/1000%60);
		M=Math.floor(times/1000/60);
		if(S<10){
			S="0"+S;
		}
		if(M<10){
			M="0"+M;
		}
		return M+":"+S;
	};
	$scope.aflag=true;
	$scope.imgflag=true;
	$("video").attr("src","http://static.donguo.me/video/ip/course/youerqingshang1.mp4");
	$("#myimg").attr("src","http://static.donguo.me/image/jpg/youerqingshang1920.jpg");
	$scope.btn=function(data){
		$("video").attr("src",data);
		$scope.aflag=false;
		$scope.imgflag=false;
		document.getElementById("myvideo").play();
	};
//	$scope.playvideo=function(){
//		$scope.aflag=false;
//		$scope.imgflag=false;
//		document.getElementById("myvideo").play();
//	};
	document.getElementById("myvideo").addEventListener("touchstart",function(){
		document.getElementById("myvideo").pause();
		$scope.aflag=true;
	},!1);
	document.getElementById("play").addEventListener("touchstart",function(){
		$scope.aflag=false;
		$scope.imgflag=false;
		document.getElementById("myvideo").play();
	},!1);
	
})