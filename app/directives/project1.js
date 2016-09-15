'use strict';

angular.module('project1Directive', [])

    .directive('htmlInfo', function(){
        return{
            restrict: 'E',
            templateUrl: 'app/pages/projectInfo1.html',
            link:function(scope){
                
                $('#thumb1').hover(function(){
                    $('#prev1').addClass('view');
                    $('#prev2').removeClass('view');
                    $('#prev3').removeClass('view');
                });
                
                $('#thumb2').hover(function(){
                    $('#prev1').removeClass('view');
                    $('#prev2').addClass('view');
                    $('#prev3').removeClass('view');
                });
                
                $('#thumb3').hover(function(){
                    $('#prev1').removeClass('view');
                    $('#prev2').removeClass('view');
                    $('#prev3').addClass('view');
                });
                
                
            }
        }
});