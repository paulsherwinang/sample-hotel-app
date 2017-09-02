'use strict';

describe('filter-trustyou.component module', function() {
    var $componentController;

    beforeEach(module('app.templates'));
    beforeEach(module('filter-trustyou.component'));

    beforeEach(inject(function(_$componentController_){
        $componentController = _$componentController_;
    }));

    it('should call onCheckboxChange with changed value', function() {
        var term = 'Hello';
        var bindings = {
            onCheckboxChange: jasmine.createSpy('onCheckboxChange'),
            trustyouFilter: ''
        };

        var ctrl = $componentController('filterTrustyouComponent', null, bindings);
        ctrl.trustyouFilter = term;
        ctrl.onCheckboxChange({ trustyouFilter: ctrl.trustyouFilter });
        expect(ctrl.onCheckboxChange).toHaveBeenCalledWith({
            trustyouFilter: term
        });
    });

});