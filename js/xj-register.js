app.controller("registerController",function($scope,$http,$rootScope,$state){
	$rootScope.showFooter=false;
	$rootScope.showHeader=false;
		console.log($scope.name)	
			function PersonInfo(name,pwd,pwd2){
				this.name=name;
				this.pwd=pwd;
				this.pwd2=pwd2;
			}
			/*PersonInfo.prototype.saveToLocalStorage=function(){
				var storage=window.localStorage.getItem('PersonInfo');
				storage=storage ? JSON.parse(storage) : [];
				storage.push(this);
				window.localStorage.setItem('PersonInfo',JSON.stringify(storage));
			}
			PersonInfo.selectByName=function(name){
				var storage=window.localStorage.getItem('PersonInfo');
				storage=storage ? JSON.parse(storage):[];
				return storage.some(function(v){
					return v.name===name;
				});
			}*/
			
			
				$scope.title="登录",
				$scope.title01="注册",
				$scope.reg=function(name,pwd,pwd2){
					var name=$scope.name,
						pwd=$scope.pwd,
						pwd2=$scope.pwd2,
						re = /^[a-zA-Z0-9_]{5,12}$/,
			    	    patrn = /^(\w){8,18}$/;
						if(name!=""&&pwd!=""&&pwd2!=""){
							if(!re.test(name)){
								layer.open({
						            content: '用户名应为5到12位数字和字母',
						            style: 'background:url(../img/false.png) no-repeat 20px 20px #09C1FF; color:#fff; border:none;font-size:30px',
						            time: 2,
			           		 	});
			           		 	return false;
							}else if(!patrn.test(pwd)){
								layer.open({
									content:'密码应为8到18位数字和字母',
						            style: 'background:url(../img/false.png) no-repeat 20px 20px #09C1FF; color:#fff; border:none;font-size:30px',
									time: 2,
								});
								return false;
							}else if(pwd !== pwd2){
								layer.open({
						            content: '两次密码输入不一致',
						            style: 'background:url(../img/false.png) no-repeat 20px 20px #09C1FF; color:#fff; border:none;font-size:30px',
						            time: 2,
				           		 });
								return false;
							}else{
								$http({
									url:"http://datainfo.duapp.com/shopdata/userinfo.php",
									method:"Get",
									params:{
										status:"register",
										userID:name,
										password:pwd,
									}
									}).success(function(data){
										console.log(data);
										if(data==0){
											layer.open({
									            content: '用户名重名',
									            style: 'background:url(../img/false.png) no-repeat 20px 20px #09C1FF; color:#fff; border:none;font-size:30px',
									            time: 2,
							           		 });
										}else if(data==2){
											layer.open({
									            content: '请刷新页面',
									            style: 'background:url(../img/false.png) no-repeat 20px 20px #09C1FF; color:#fff; border:none;font-size:30px',
									            time: 2,
							           		 });
										}else if(data==1){
											$state.go("tabs.mine");
										}
									})
							}
							/*else if(PersonInfo.selectByName(name)){
								layer.open({
						            content: '该用户已存在',
						            style: 'background:url(../img/false.png) no-repeat 20px 20px #09C1FF; color:#fff; border:none;font-size:30px',
						            time: 2,
				           		 });
								return false;
							}
						}*/
					//	var data=new PersonInfo(name,pwd,pwd2);
					//	data.saveToLocalStorage();
						$scope.name=$scope.pwd=$scope.pwd2='';
				}
			}	
			
		})					
				
//				app.controller("mainCtrl",["$scope","$http",function($scope,$http){
//			$http({
//				url:"../detail/1355.json",
//				method:"Get",
//				params:{
//					orgName:decodeURI("有限公司")
//				}
//			}).success(function(data){
//				console.log(data);
//			});
				
