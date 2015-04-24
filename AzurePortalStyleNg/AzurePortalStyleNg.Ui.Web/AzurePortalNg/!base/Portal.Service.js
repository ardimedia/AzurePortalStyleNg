var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Class Definition: PortalService
    var PortalService = (function () {
        //#endregion
        //#region Constructors
        function PortalService($injector) {
            this.$injector = $injector;
            this.$http = $injector.get('$http');
            this.$httpBackend = $injector.get('$httpBackend');
            this.$q = $injector.get('$q');
            ;
            this.$window = $injector.get('$window');
            ;
            this.panorama = new AzurePortalNg.Panorama('');
            this.bladeService = new AzurePortalNg.BladeService(this);
        }
        //#endregion
        //#region Methods
        PortalService.prototype.initialize = function (portalShell) {
            this.portalShell = portalShell;
            this.portalShell.setObsoleteLayoutProperites();
        };
        return PortalService;
    })();
    AzurePortalNg.PortalService = PortalService;
    //#endregion
    //#region Angular Registration
    (function () {
        'use strict';
        angular.module('azureportalng').service('azurePortalNg.portalService', ['$injector', AzurePortalNg.PortalService]);
    })();
})(AzurePortalNg || (AzurePortalNg = {}));
//# sourceMappingURL=Portal.Service.js.map