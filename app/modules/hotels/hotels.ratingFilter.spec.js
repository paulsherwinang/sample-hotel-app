'use strict';

describe('rating filter', function() {
    var ratingFilter;

    beforeEach(module('app.templates'));
    beforeEach(module('myApp.hotels'));

    beforeEach(inject(function(_$filter_){
        ratingFilter = _$filter_('rating');
    }));

    it('should return all if no ratings selected', function() {
        var items = [
            {hi: 'hello'}, {hi: 'hello'},
            {hi: 'hello'}, {hi: 'hello'}
        ];

        expect(ratingFilter(items, []).length).toBe(4);
    });

    it('should filter ratings correctly', function() {
        var items = [
            { rating: 3 },
            { rating: 4 },
            { rating: 5 },
            { rating: 1 },
            { rating: 2 }, { rating: 2 }
        ];

        expect(ratingFilter(items, [1, 2]).length).toBe(3);
    });

});