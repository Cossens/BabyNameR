/**
 * Created by campb on 23/03/2016.
 */
angular.module('babyNames')
    .directive('babyNamesList', function(){
        return {
            restrict: 'E',
            templateUrl: 'babyNames.html',
            controller: 'BabyNamesController',
            controllerAs: 'ctrl'
        }
    })