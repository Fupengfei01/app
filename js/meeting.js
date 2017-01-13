app.controller("meetingcontroller",function ($scope,$rootScope,$http,$timeout,$stateParams) {
    $rootScope.showHeader=false;
    $rootScope.showFooter=false;
    /*$scope.paraid=$stateParams.userId;
    console.log($scope.paraid);*/
    $scope.paraid="578e1e7a87dd2a86c4360043";
    var url='../json/livejson/'+$scope.paraid+".json";
    $rootScope.backToInt=function () {
        console.log("aaa");
        history.go(-1);
    }
    $timeout(function(){
        $http({
            url:url,
            method:"get",
        }).then(function(response){
            var thisdata=response.data.data;
            $scope.masters=thisdata.live.masters;
            console.log($scope.masters);

        }.bind(this));
    },0);

})