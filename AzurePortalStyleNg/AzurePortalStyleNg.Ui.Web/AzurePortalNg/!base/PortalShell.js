var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Class Definition: PortalShell
    var PortalShell = (function (_super) {
        __extends(PortalShell, _super);
        //#endregion
        //#endregion
        //#region Constructors
        function PortalShell(title, portalService) {
            _super.call(this, portalService);
            AzurePortalNg.Debug.write('[azureportalng-debug] \'PortalShell\' constructor called.', [this, title, portalService]);
            this.portalService = portalService;
            this.portalService.portalShell = this;
            this.portalService.panorama = new AzurePortalNg.Panorama(title, this.portalService);
            this.portalService.bladeArea = new AzurePortalNg.BladeArea(portalService);
            this.initialize();
        }
        //#endregion
        //#region Methods
        PortalShell.prototype.initialize = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'PortalShell.initialize\' called.', [this]);
            this.setObsoleteLayoutProperites();
        };
        PortalShell.prototype.setObsoleteLayoutProperites = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'PortalShell.setObsoleteLayoutProperites\' called.', [this]);
            this.title = this.portalService.panorama.title;
            this.tiles = this.portalService.panorama.startboard.tiles.tiles;
            this.blades = this.portalService.bladeArea.blades;
            var bladeServiceOLD = this.portalService.$injector.get('bladeService');
            bladeServiceOLD.blades = this.portalService.bladeArea.blades;
            if (this.portalService.panorama.avatarMenu.userAccount != undefined) {
                this.user = {
                    name: this.portalService.panorama.avatarMenu.userAccount.name,
                    emailaddress: this.portalService.panorama.avatarMenu.userAccount.userName
                };
            }
            if (this.portalService.bladeArea != null) {
                this.portalService.bladeArea.blades.forEach(function (blade) {
                    blade.setObsoleteLayoutProperites();
                });
            }
        };
        return PortalShell;
    })(AzurePortalNg.UserControlBase);
    AzurePortalNg.PortalShell = PortalShell;
})(AzurePortalNg || (AzurePortalNg = {}));
//# sourceMappingURL=PortalShell.js.map