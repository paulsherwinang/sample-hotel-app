'use strict';

angular.module('myApp.sidebar', [
    'hotel-search.component',
    'hotel-sort.component',
    'filter-trustyou.component',
    'filter-rating.component'
]).

component('appSidebar', {
    templateUrl: 'modules/sidebar/sidebar.html',
    bindings: {
        onHotelNameSearch: "<",
        searchTerm: "<",
        onHotelSort: "<",
        sortValue: "<",
        onTrustyouFilter: "<",
        trustyouFilter: "<",
        onStarRatingFilter: "<",
        selectedRatings: "<"
    }
});