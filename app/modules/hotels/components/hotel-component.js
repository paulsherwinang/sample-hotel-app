angular.module('hotel.component', [])
    .component('hotelComponent', {
        templateUrl: 'modules/hotels/components/hotel-component.html',
        transclude: true,
        bindings: {
            hotel: '<'
        }
    });