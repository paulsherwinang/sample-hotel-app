'use strict';

describe('hotel-rating.component module', function() {
    var elem, $scope;

    beforeEach(module('app.templates'));
    beforeEach(module('hotel-rating.component'));

    beforeEach(inject(function($compile, $rootScope){
        $scope = $rootScope.$new(true);
        var html = '<hotel-rating-component rating="5"></hotel-rating-component>';
        elem = $compile(html)($scope);
        $scope.$digest();
    }));

    it('should render .star 5 times', function() {
        expect($(elem).find('.star').length).toBe(5);
    });

});