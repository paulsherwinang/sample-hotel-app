"use strict";

angular.module('hotels.component', [
    'hotel.component'
]).
component('hotelsComponent', {
    templateUrl: 'modules/hotels/hotels-component/hotels.component.html',
    bindings: {
        hotels: '<',
        searchTerm: '<',
        sortValue: '<',
        trustyouFilter: '<',
        selectedStars: '<'
    }
});