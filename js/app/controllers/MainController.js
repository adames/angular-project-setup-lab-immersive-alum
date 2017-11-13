
function MainController($scope) {
    $scope.nested = {
        name: 'Adames'
    };
}

angular
    .module('app')
    .controller('MainController', MainController);