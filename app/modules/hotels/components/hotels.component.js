angular.module('hotels.component', [
    'hotel.component'
]).
component('hotelsComponent', {
    templateUrl: 'modules/hotels/components/hotels.component.html',
    bindings: {
        hotels: '<'
    }
});