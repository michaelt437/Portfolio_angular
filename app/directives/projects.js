'use strict';

angular.module('projectsDirective', [])

    .directive('projDir', function() {
        return{
            restrict: 'E',
            templateUrl: 'app/pages/projects.html',
            
            link: function(scope, element){

//                $('.closeblock').click(function(){
//                    var clicked = $(this);
//                    
//                    $('.openblock').not(clicked).toggleClass('openblock closeblock');
//
//                    clicked.toggleClass('closeblock openblock');
//                    
//                });
               
                
                
                $('.closeblock').hover(function(){
                    $(this).find('.launch').css({
                        'visibility':'visible',
                        'opacity':'1'
                    });
                });
                
                $('.closeblock').mouseleave(function(){
                    $(this).find('.launch').css({
                        'opacity':'0'
                    });
                });
                
                $('.launch').click(function(){
            
                    setTimeout(function(){
                        var h = $('.fade').height();
                        $('#view-wrapper').css({'height': h-100});
                    }, 400);

                    setTimeout(function(){

                        var topH = $("#view-wrapper").offset().top;
                        var ttop = topH - 50;

                        $('html, body').animate({
                            scrollTop: ttop
                        }, 500);

                    },500);

        });
                
                
                
            }
        }
    });
