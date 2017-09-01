'use strict';

angular.module('hotel-sort.component', []).

component('hotelSortComponent', {
    templateUrl: 'modules/sidebar/hotel-sort/hotel-sort.component.html',
    bindings: {
        onSelectChange: "&"
    },
    controller: function() {
        this.sortValue = '';
    }
});