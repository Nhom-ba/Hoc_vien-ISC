angular.module("D")
    .controller("Home",function($http, $scope) {
        $scope.constructions = [];
        $http.get('http://localhost:3000/constructions')
            .then(function(response){
                $scope.constructions = response.data;
          
            });
    $scope.newConstructions = {};
    $scope.test = function(){
        $scope.constructions.push($scope.newConstructions);
        $http.post('http://localhost:3000/constructions',$scope.newConstructions).then();
    };
    $scope.delete = function(index){
        if(confirm("are u sure?")){
        toDelete= $scope.constructions[index];
        $scope.constructions.splice(index, 1);
        $http.delete('http://localhost:3000/constructions/'+ toDelete.id).then();
        }
        
        
    };
    $scope.edit =function(contruction){
        $scope.newConstructions = contruction;
    };
    $scope.save = function(con){
      var id = con.id;
        $http.put('http://localhost:3000/constructions/'+id,con).then();
    };
});