app.controller("Banner_Control",function($http,$scope){
        $scope.banners=[];
        $http.get("http://localhost:3000/banners")
            .then(function(response){
                $scope.banners = response.data;
        });
    
    });
app.controller("News_Control",function($http,$scope){
		$scope.news=[];
        $http.get("http://localhost:3000/news")
            .then(function(response){
                $scope.news = response.data;
        });
	});