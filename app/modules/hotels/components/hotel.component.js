'use strict';

angular.module('hotel.component', [
    'hotel-rating.component'
]).

component('hotelComponent', {
    templateUrl: 'modules/hotels/components/hotel.component.html',
    controller: function() {
        this.isHighlighted = this.hotel.rating >= 4;
    },
    bindings: {
        hotel: '<'
    }
});