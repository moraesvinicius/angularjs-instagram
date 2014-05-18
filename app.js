var app = angular.module("appInstagram", []);

app.factory('instagram', ['$http', function($http){

return {
fetchPopular: function(callback){
var endPoint = "https://api.instagram.com/v1/media/popular?client_id=642176ece1e7445e99244cec26f4de1f&callback=JSON_CALLBACK";

$http.jsonp(endPoint).success(function(response){
callback(response.data);
});
}
}

}]);

app.controller('contrllInstagram', ['$scope', 'instagram' ,
function ($scope, instagram){


$scope.layout = 'grid';

$scope.setLayout = function(layout){
$scope.layout = layout;
};

$scope.isLayout = function(layout){
return $scope.layout == layout;
};

$scope.pics = [];

instagram.fetchPopular(function(data){

$scope.pics = data;
});

}]);