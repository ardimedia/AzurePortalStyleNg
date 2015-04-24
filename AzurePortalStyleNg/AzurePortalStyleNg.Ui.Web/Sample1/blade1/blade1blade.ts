﻿(function () {
    'use strict';

    angular.module('sampleapp')
        .directive('sample1Blade1Blade', [sample1Blade1Blade]);

    function sample1Blade1Blade() {
        return {
            replace: true,
            transclude: true,
            templateUrl: '/AzurePortalNg/portal/!directives/blade/blade.html',
            controller: 'blade1',
            controllerAs: 'vm',
            //link: function (scope, element, attrs, controller) {
            //    scope.bladeClose = function () {
            //        bladeService.clearLastLevel();
            //    };
            //}
        };
    }
})();