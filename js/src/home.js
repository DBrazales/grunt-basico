angular.module("app", [])
 
.controller("homeCtrl", function($scope, Users)
{
    $scope.name = "Iparra";
 
    $scope.getUsers = function()
    {
        Users.all().success(
            function(data)
            {
                $scope.res = data;
            },
            function(error)
            {
                $scope.res = "Error";
            }
        )
    }
})
 
.factory("Users", function($http, $q)
{
    return {
        all: function()
        {
            return $http.get("data.json");
        },
        allPromise: function()
        {
            var deferred = $q.defer();
            $http.get("data.json")
            .success(function(data)
            {
                deferred.resolve(data);
            })
            .error(function(error)
            {
                deferred.reject("Error");
            })
            return deferred.promise;
        }
    }
})