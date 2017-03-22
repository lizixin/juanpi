app.controller('globalCtrl', ['$scope', '$http', function ($scop
	, $http) {
		//获取json数据
		$http.get('../../data/global-02.json').success(function (data) {
			$scope.bannerData = data.data.banner_ads;
			console.log($scope.bannerData);
			$scope.childData = data.data.module_ads.multi_block[0].data[0].child
		});
		$http.get('../../data/global-03.json').success(function (data) {
			$scope.kouhongData = data.list;
		});
		
		//如果repeat过了，开始轮播
		$scope.isRepeat =  function (){
			var mySwiper = new Swiper ('.swiper-container', {initialSlide:4,
							  	direction: 'horizontal',
								loop: true,
								autoplay:1000,
								speed:1000,
								 // 如果需要分页器
								 pagination: '.swiper-pagination',
							 });
			}
}])

app.directive('repeatDone', function () {
	return {
		link : function (scope,element,attr){
			if(scope.$last){
				scope.$eval(attr.repeatDone);
			}
		 }
	}
})