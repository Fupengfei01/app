app.controller("talkcontroller",function ($scope,$rootScope,$http,$timeout,$stateParams) {
    $rootScope.showHeader=false;
    $rootScope.showFooter=false;
    $scope.paraid=$stateParams.id;
    console.log($scope.paraid);
    if(!$scope.paraid){
        $scope.paraid="5860b6ecb5b092e840440858";
    }
    var url='../json/artjson/'+$scope.paraid+".json";
    $rootScope.backToInt=function () {
        console.log("aaa");
        history.go(-1);
    }
    $timeout(function(){
        $http({
            url:url,
            method:"get",
        }).then(function(response){
            var thisdata=response.data
            $scope.data=thisdata.data.article;
        }.bind(this));
    },0);
})
