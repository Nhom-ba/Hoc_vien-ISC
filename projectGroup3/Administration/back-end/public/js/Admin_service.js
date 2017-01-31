app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "Views/Banner_View.html",
		controller:"Banner_Control"
    })
   	.when("/news", {
        templateUrl : "Views/News_View.html",
		controller:"News_Control"
    });
});// JavaScript Document