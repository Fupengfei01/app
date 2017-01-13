app.controller("loginController",function($scope,$http,$rootScope,$state){
	$rootScope.showFooter=false;
	$rootScope.showHeader=false;
	$scope.title="登录",
	$scope.title01="注册"
	$scope.log=function(name,pwd){
		var name=$scope.userName,
			pwd=$scope.userPwd,
			na=/^[a-zA-Z0-9_]{5,12}$/,
			pw=/^(\w){8,18}$/;
			if(name!=""&&pwd!=""){
				if(!na.test(name)){
					layer.open({
						content:'用户名应为5到12位数字字母',
						style:'background:url(../img/false.png) no-repeat 20px 20px #09c1ff; color:#fff;border:none;font-size:30px',
						time: 2,
					});
					return false;
				}else if(!pw.test(pwd)){
					layer.open({
						content:'密码应为8到18位数字和字母',
			            style: 'background:url(../img/false.png) no-repeat 20px 20px #09C1FF; color:#fff; border:none;font-size:30px',
						time: 2,
					});
					return false;
				}
			}else{
				$http({
					url:"http://datainfo.duapp.com/shopdata/userinfo.php",
					method:"Get",
					params:{
						status:"login",
						userID:name,
						password:pwd,
					}
				}).success(function(data){
					console.log(data);
					if(data==0){
						layer.open({
				            content: '用户名不存在',
				            style: 'background:url(../img/false.png) no-repeat 20px 20px #09C1FF; color:#fff; border:none;font-size:30px',
				            time: 2,
		           		 });
					}else if(data==2){
						layer.open({
				            content: '用户名与密码不符',
				            style: 'background:url(../img/false.png) no-repeat 20px 20px #09C1FF; color:#fff; border:none;font-size:30px',
				            time: 2,
		           		});
					}else{
						
//						$scope.Hash="tabs.mine";
						$state.go("tabs.mine");
					}
				})
			}
	}
	
})
