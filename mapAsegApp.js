var mapAsegApp = angular.module('mapAsegApp', ['ngResource', 'ngMdIcons', 'ui.router', 'ngCookies', 'ngTable',
  'ngSanitize', 'ngAnimate', 'ngAria', 'ct.ui.router.extras', 'angular-loading-bar', 'LocalStorageModule', 'angular-jwt', 'ngMaterial',
  'ng-mfb', 'ngAutocomplete', 'ngFileUpload', 'ngMessages', 'vAccordion', 'google-maps'])
.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $stickyStateProvider, cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
    cfpLoadingBarProvider.includeBar = true;

    $urlRouterProvider.otherwise("/mapaPrincipal/Aseg");

    $stateProvider

            //#region Home 
            .state('home', {
                abstract: true,
                url: '/mapaPrincipal',
                views: {
                    '': {
                        templateUrl: ''
                    }
                }
            })
            .state('home.inicio', {
                url: "/Aseg",
                templateUrl: '/App/mapaPrincipal/Partials/mapaPrincipal.html',
                controller: 'mapaPrincipalCtrl',
                resolve: {
                    //mapaPrincipalDF: 'mapaPrincipalDF'
                }

            })

})