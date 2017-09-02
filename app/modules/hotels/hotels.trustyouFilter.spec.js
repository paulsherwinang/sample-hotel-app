'use strict';

describe('trustyou filter', function() {
    var trustyouFilter;

    beforeEach(module('app.templates'));
    beforeEach(module('myApp.hotels'));

    beforeEach(inject(function(_$filter_){
        trustyouFilter = _$filter_('trustyou');
    }));

    it('should return all if trustyou is not filtered', function() {
        var items = [
            {trustyou: {score: { overall: null }}},
            {trustyou: {score: { overall: 2 }}},
            {trustyou: {score: { overall: 3 }}},
            {trustyou: {score: { overall: 4 }}},
            {trustyou: {score: { overall: null }}},
        ];

        expect(trustyouFilter(items, false).length).toBe(5);
    });

    it('should filter ratings correctly', function() {
        var items = [
            {trustyou: {score: { overall: null }}},
            {trustyou: {score: { overall: null }}},
            {trustyou: {score: { overall: 4 }}},
            {trustyou: {score: { overall: 3 }}},
            {trustyou: {score: { overall: 2 }}},
        ];

        expect(trustyouFilter(items, true).length).toBe(3);
    });

});