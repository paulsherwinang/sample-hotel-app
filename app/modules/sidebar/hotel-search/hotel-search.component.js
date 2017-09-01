'use strict';

angular.module('hotel-search.component', []).
    component('hotelSearchComponent', {
        templateUrl: 'modules/sidebar/hotel-search/hotel-search.component.html',
        bindings: {
            onInputChange: '&'
        },
        controller: function() {
            this.searchTerm = '';
        }
    });