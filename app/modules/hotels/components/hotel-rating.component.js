angular.module('hotel-rating.component', []).
    component('hotelRatingComponent', {
        templateUrl: 'modules/hotels/components/hotel-rating.component.html',
        bindings: {
            rating: '@'
        }
    });