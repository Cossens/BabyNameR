/**
 * Created by campb on 23/03/2016.
 */
angular.module('babyNames.components')
    .controller('BabyNamesController', [function(){
        var _this = this;

        _this.babyNames = [
            {
                name: 'Albert',
                score: 0
            },
            {
                name:'Barry',
                score:0
            }];

        _this.validNames = validNames;
        _this.likeName = likeName;
        _this.dislikeName = dislikeName;

        //Private
        function likeName(name){
            name.score++;
        }

        function dislikeName(name){
            name.score--;
        }

        function validNames(babyName){
            return babyName.score == 0;
        }
    }]);