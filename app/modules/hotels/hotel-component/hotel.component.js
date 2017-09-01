'use strict';

angular.module('hotel.component', [
    'hotel-rating.component',
    'hotel-trustyou.component'
]).

component('hotelComponent', {
    templateUrl: 'modules/hotels/hotel-component/hotel.component.html',
    controller: function() {
        this.isHighlighted = this.hotel.rating >= 4;
    },
    bindings: {
        hotel: '<'
    }
});