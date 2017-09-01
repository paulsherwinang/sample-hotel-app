'use strict';

angular.module('myApp.sidebar', [
    'hotel-search.component'
]).

component('appSidebar', {
    templateUrl: 'modules/sidebar/sidebar.html',
    bindings: {
        onHotelNameSearch: "<"
    }
});