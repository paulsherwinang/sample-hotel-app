'use strict';

describe('hotel-search.component module', function() {
    var $componentController;

    beforeEach(module('app.templates'));
    beforeEach(module('hotel-search.component'));

    beforeEach(inject(function(_$componentController_){
        $componentController = _$componentController_;
    }));

    it('should call onInputChange with changed value', function() {
        var term = 'Hello';
        var bindings = {
            onInputChange: jasmine.createSpy('onInputChange'),
            searchTerm: ''
        };

        var ctrl = $componentController('hotelSearchComponent', null, bindings);
        ctrl.searchTerm = term;
        ctrl.onInputChange({ searchTerm: ctrl.searchTerm });
        expect(ctrl.onInputChange).toHaveBeenCalledWith({
            searchTerm: term
        });
    });

});