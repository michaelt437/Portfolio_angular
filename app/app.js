;(function () {
    'use strict';
    
    angular.module('portfolioApp', [
        'ngRoute',
        'ngAnimate',
        'projectsDirective',
        'project1Directive',
        'project2Directive',
        'project3Directive',
        'project4Directive',
        'project5Directive',
        'trainingDirective'
    ])
    
    .config(function($routeProvider) {
        $routeProvider
            .when('/projects', {
                template: '<proj-dir></proj-dir>' 
            })
            .when('/resume', {
                templateUrl: 'app/pages/resume.html'
            })
            .when('/projects/html1', {
                template: '<html-info></html-info>'
            })
            .when('/projects/html2', {
                template: '<hhtml-info></hhtml-info>'
            })
            .when('/projects/flash', {
                template: '<flash-info></flash-info>'
            })
            .when('/projects/javascript', {
                template: '<js-info></js-info>'
            })
            .when('/projects/python', {
                template: '<python-info></python-info>'
            })
            .when('/projects/catapp', {
                template: '<cat-info></cat-info>'
            })
    })


    ;
})();

    
