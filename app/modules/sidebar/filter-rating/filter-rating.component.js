'use strict';

angular.module('filter-rating.component', []).

component('filterRatingComponent', {
    templateUrl: 'modules/sidebar/filter-rating/filter-rating.component.html',
    bindings: {
        onRatingChange: '&',
        selection: '<'
    },
    controller: function() {
        var self = this;

        this.ratings = [1,2,3,4,5];

        this.toggleRating = function(rating) {
            var idx = self.selection.indexOf(rating);

            if (idx > -1) {
                self.selection.splice(idx, 1);
            }

            else {
                self.selection.push(rating);
            }

            self.onRatingChange({selectedRatings: self.selection});
        };
    }
});