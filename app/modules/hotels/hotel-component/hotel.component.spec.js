'use strict';

describe('hotel-rating.component module', function() {
    var elem, $scope;

    beforeEach(module('app.templates'));
    beforeEach(module('hotel.component'));

    beforeEach(inject(function($compile, $rootScope){
        $scope = $rootScope.$new(true);
        var html = '<hotel-component hotel="hotel"></hotel-component>';
        elem = $compile(html)($scope);
    }));

    it('should render name, address and not highlighted', function() {
        $scope.hotel = {
            name: 'NAME',
            address: 'ADDRESS',
            rating: 3
        };

        $scope.$digest();

        expect($(elem).find('.card-title').text()).toContain('NAME');
        expect($(elem).find('.card-subtitle').text()).toContain('ADDRESS');
        expect($(elem).find('.border-danger').length).toBe(0);
    });


    it('should be highlighted when >= 4', function() {
        $scope.hotel = {
            rating: 5
        };

        $scope.$digest();

        expect($(elem).find('.border-danger').length).toBe(1);
    });
});