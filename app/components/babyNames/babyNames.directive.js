/**
 * Created by campb on 23/03/2016.
 */
angular.module('babyNames.components')
    .directive('babyNamesList', function(){
        return {
            restrict: 'E',
            templateUrl: './components/babyNames/babyNames.html',
            controller: 'BabyNamesController',
            controllerAs: 'ctrl'
        }
    })