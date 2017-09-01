'use strict';

angular.module('hotel-rating.component', []).
    component('hotelRatingComponent', {
        templateUrl: 'modules/hotels/hotel-rating/hotel-rating.component.html',
        bindings: {
            rating: '@'
        },
        controller: function() {
            this.range = function(n) {
                return _.range(n);
            };
        }
    });