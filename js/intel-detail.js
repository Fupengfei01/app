/**
 * Created by 诗宝宝 on 2017/1/3.
 */
app.controller("inteldelcontroller",function ($http,$scope,$rootScope,$state,$stateParams,$timeout) {
    $rootScope.showHeader=false;
    $rootScope.showFooter=false;
    $scope.paraid=$stateParams.delId;
    console.log($scope.paraid);
    var url='../json/deljson/'+$scope.paraid+".json";
    console.log(url);
    $timeout(function(){

        $http({
            url:url,
            method:"get",
        }).then(function(response){
            var thisdata=response.data.data;
            $scope.master=thisdata.master;
            $scope.abouts=thisdata.abouts;


        }.bind(this));
    },0);
    $scope.goBackIntel=function () {
        $state.go("tabs.intelligent");
    }
    $scope.goSub=function (e) {
        var text=$(e.target).parent().find("span").text();
        var url=$(e.target).parent().attr("url").split("articleId=")[1];
        var liveId=$(e.target).parent().attr("live-id").split("liveId=")[1];
        console.log(url);
        console.log(liveId);
        if(text=="[圆桌会]"){
            $state.go("tabs.meeting",{
                userId:liveId,
            });
        }else if(text=="[达人谈]"){
            $state.go("tabs.talk",{
                id:url,
            });
        }
    };
})