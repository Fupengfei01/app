// /**
//  * Created by 诗宝宝 on 2016/12/27.
//  */
app.controller("intelligentcontroller",function ($scope,$http,$timeout,$rootScope,$state) {
    $rootScope.title="达人";
    $rootScope.showHeader=true;
    $rootScope.showFooter=true; 
    $scope.num=0;
    $scope.showFlag=true;
    var jsFile=['../json/n-intelligent.json','../json/xlcz.json','../json/yyqm.json','../json/yssy.json','../json/zrkx.json']
    var url=jsFile[0];
    function getData(url) {
        $timeout(function(){
            $http({
                url:url,
                method:"get",
            }).then(function(response){
                var linfo=response.data;
                $scope.listArr=linfo.data.masters.slice(0,10);
                $scope.$broadcast("scroll.refreshComplete");
                $scope.goDel=function (id) {
                    $state.go("tabs.inteldel",{
                        delId:id,
                    });
                }

            }.bind(this));
        },0);
        $scope.doRefresh = function(){
            $timeout(function(){
                $http({
                    url:url,
                    method:"get",
                }).then(function(response){
                    $scope.$broadcast("scroll.refreshComplete");
                }.bind(this))
            },1500)

        }

        $scope.loadMore=function(){
            $timeout(function(){
                $scope.num++;
                $http({
                    url:url,
                    method:"get",
                }).then(function(response){
                    var linfo=response.data;
                    $scope.listArr=linfo.data.masters.slice(0,$scope.num*10);
                    $scope.$broadcast("scroll.infiniteScrollComplete");

                }.bind(this));
            },1500);
        }

        $scope.onSwipeDown=function(){
            console.log("onSwipeDown");
            $scope.showFlag=true;
            /*$(".intel-nav ul").slideDown();
             $scope.$apply();*/
        }
        $scope.onSwipeUp=function(){
            console.log("onSwipeUp");
            $scope.showFlag=false;
            /*$(".intel-nav ul").slideUp();
             $scope.$apply();*/
            /*$(".con").css({"margin-top":"120px"});
             $scope.$apply();*/

        }
    }
    getData(url);

    $(".intel-nav ul").on("click","li",function () {
        //console.log($(this).position().left);
        $(".linear").animate({left:$(this).position().left});
        console.log($(this).index());
        switch ($(this).index()){
            case 0:
                url=jsFile[0];
                break;
            case 1:
                url=jsFile[1];
                break;
            case 2:
                url=jsFile[2];
                break;
            case 3:
                url=jsFile[3];
                break;
            case 4:
                url=jsFile[4];
                break;
            default:;

        }
        console.log(url);
        getData(url);
        $scope.$apply();

    })

})
