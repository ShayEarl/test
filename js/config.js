var htmls='<h2>热门</h2>';
var motin="北京";
for(var s in hotList){
	if(hotList[s][0]==motin){	
		htmls+='<span class="colorgreen">'+hotList[s][0]+'</span>';
	}else{
		htmls+='<span >'+hotList[s][0]+'</span>';
	}
}
for(var i in Alphabet)
{	
	htmls+="<h2>"+Alphabet[i]+"</h2>";
	for(var s in cityList)
	{
		if(Alphabet[i]==cityList[s][2].substr(0,1).toUpperCase())
		{
			if(cityList[s][0]==motin){
				htmls+='<span class="colorgreen">'+hotList[s][0]+'</span>';
			}else{
				htmls+="<span>"+cityList[s][0]+"</span>";

			}
		}
	}
}
var areneid_home=angular.module("areneid_home",["ui.router"])


areneid_home
	.config(configs)
	.run(function($rootScope,$state){
		$rootScope.$state=$state;
	})
	function configs($urlRouterProvider,$stateProvider){
		$urlRouterProvider.otherwise("/index/page1")
		$stateProvider
		.state("index",
		{
			url:"/index",
			views:{
			'':{
				templateUrl:"../html/page.html"
				},
				'footer@index':{
					templateUrl:"../html/footer.html"
				}
			}
		})
		.state("index.page1",{
			url:"/page1",
			views:{
				'page@index':{
					templateUrl:"../html/page1.html"
				}
			}
		})
		.state("index.page2",{
			url:"/page2",
			views:{
				'page@index':{
					templateUrl:"../html/page2.html"
				}
			}
		})
		.state("index.page3",{
			url:"/page3",
			views:{
				'page@index':{
					templateUrl:"../html/page3.html"
				}
			}
		})
		.state("index.page4",{
			url:"/page4",
			views:{
				'page@index':{
					templateUrl:"../html/page4.html"
				}
			}
		})
		.state("index.page5",{
			url:"/page5",
			views:{
				'page@index':{
					templateUrl:"../html/page5.html"
				}
			}
		})
		.state("index.cinema1",{
			url:"/cinema1",
			views:{
				'cinemas@index':{
					templateUrl:"./html/cinema1.html"
				}
			}
		})
		.state("index.cinema2",{
			url:"/cinema2",
			views:{
				'cinemas@index':{
					templateUrl:"./html/cinema2.html"
				}
			}
		})
		.state("index.cinema3",{
			url:"/cinema3",
			views:{
				'cinemas@index':{
					templateUrl:"./html/cinema3.html"
				}
			}
		})
	}
	areneid_home.controller("areneidhome",["$scope","$http",function($scope,$http){
			$http({
	        method: 'GET',
	        url: '../data/data.json'
		    }).success(function(data, status, headers, config) {
		    	$scope.cinemalis=data.cinemaInfo;
		    }).error(function(data, status, headers, config) {
		        console.log("error...");
		    })
		   
		$scope.showss=[0,0];
		setTimeout(function(){
			var myScroll = new IScroll('.main', {
			});
			var mySwiper = new Swiper('.banner', {
				autoplay: 2000,//可选选项，自动滑动
				loop : true,
				pagination : '.swiper-pagination',
			})
		},100)
		$scope.cinemas=function(s){
			$scope.showss[0]=1;
			$scope.showss[1]=1;
			$scope.showss[2]=0;
			$http({
	        method: 'GET',
	        url: '../data/cinema.json'
		    }).success(function(data, status, headers, config) {
		    	$scope.datas=data;
		    }).error(function(data, status, headers, config) {
		        console.log("error...");
		    })
		};
		$scope.sdsd=function(){
		    	$scope.showss[0]=0;
				$scope.showss[1]=0;
				$scope.showss[2]=1;
		}
		
		$scope.cittyshow=function(){
			$scope.hotcitylist=hotList;
			$scope.showss[0]=0;
			$scope.showss[1]=0;
			$scope.showss[2]=0;
			$scope.showss[3]=1;
			$(".scrolls").append(htmls);
			setTimeout(function(){
				var myScroll = new IScroll('#citylist', {
			});
			dara()
			},200)	
		}
		function dara(){
			$(".scrolls>span").on("touchstart",function(){
				$(this).addClass("colorgreen")
				$(this).siblings().removeClass("colorgreen")
				var motins=$(this).text();
				$(".citys").val(motins)		
			})
		}
		function changw(){
			var zimu=/^[A-Za-z0-9]{0,5}$/;
			var ddst=[];
			$(".changw").on("keyup",function(){
				var data=$(this).val();
				data=data.toLowerCase();
					var hts="";
				for(var s in cityList){
				
					if(zimu.test(data)&&data.length==1 && cityList[s][2].substr(0,1)==data){
						hts+="<h5>"+ cityList[s][0]+"</h5>"
					}
					else if(zimu.test(data)&&data.length>=2&& cityList[s][2].substr(0,3).indexOf(data)>=0){
						hts+="<h5>"+ cityList[s][0]+"</h5>"
					}
					else if(zimu.test(data)&&data.length>=2&& cityList[s][2].indexOf(data)>=0){
						hts+="<h5>"+ cityList[s][0]+"</h5>"
					}
					else if(zimu.test(data)&&data.length>5 &&  cityList[s][1].indexOf(data)>=0){
						hts+="<h5>"+ cityList[s][0]+"</h5>"
					}
					else if(data.length>0 && cityList[s][0].indexOf(data)>=0){
						hts+="<h5>"+ cityList[s][0]+"</h5>"
					}
				}
				$(".bd").html(hts)
				$(".bd>h5").on("touchstart",function(){
				$(this).addClass("colorgreen")
				$(this).siblings().removeClass("colorgreen")
				var motins=$(this).text();
				$(".changw").val(motins)	
				$(".citys").val(motins)		
			})
			})
		}
		$scope.motin="北京";
		$scope.soushow=function(){
			$scope.showss[4]=1;
			changw()
		}
		$scope.sohide=function(){
			$scope.showss[4]=0;

		}
		$scope.diacityhide=function(){
			$scope.showss[3]=0;
		}
		$scope.datas="";
		$scope.arr=[1,0,0];
		$scope.arrclass=["pbg",1,1]
		$scope.bg=function(s,d){
			for(i=0;i<$scope.arr.length;i++)
			{
				$scope.arr[i]=0;
				$scope.arrclass[i]="1";
			}
				$scope.arr[d]=1;
				$scope.arrclass[d]="pbg";
		}
		$scope.addarr="找影s院";
		$scope.add=function(aa){
			aas=aa.replace(/(\({1})(\d{0,5})(\){1})/,function(){
				return "";
			});
			if(aas=="全部"){return false};
			$scope.addarr=aas;
		}
	}])
