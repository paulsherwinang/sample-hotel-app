'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.hotels',
    'myApp.header',
    'myApp.sidebar'
]).

config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/hotels'});
}]).

controller('RootController', function(){
    var self = this;

    this.searchTerm = '';
    this.sortValue = '';
    this.trustyouFilter = '';
    this.selectedStars = [];

    this.onHotelNameSearch = function(searchTerm){
        self.searchTerm = searchTerm;
    };

    this.onHotelSort = function(sortValue) {
        self.sortValue = sortValue;
    };

    this.onTrustyouFilter = function(trustyouFilter) {
        self.trustyouFilter = trustyouFilter;
    };

    this.onStarRatingFilter = function(selectedRatings){
        self.selectedStars = selectedRatings;
    };
});
