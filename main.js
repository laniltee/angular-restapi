var app = angular.module('app', []);

app.controller('mainCtrl', function ($http, $scope) {
    $scope.testValue = "HTTP";

    $scope.users = [];

    loadUsers();
    function loadUsers(){
        $http.get("http://localhost:8080/api/users").then(function(response){
           $scope.users = response.data;
        });
    }


    $scope.addUser = function(){
        var newUser = {
            name: $scope.user.name
        }
        $http.post("http://localhost:8080/api/users", newUser).then(function(response){
            loadUsers();
            $scope.user.name = ""
        })
    }

    $scope.deleteUser = function(id){
        if(confirm("Are you sure to delete " + id) == true){
            $http.delete("http://localhost:8080/api/users/" + id).then(function(response){
               loadUsers();
            });
        }
    }
})
