
'use strict';

angular.module('datePicker')

.factory('$moment', function () {
  return window.moment;
})

.filter('momentFormat',
        ['$moment',
function ($moment) {
  return function (date, format) {
    return $moment(date).format(format);
  };
}]);

