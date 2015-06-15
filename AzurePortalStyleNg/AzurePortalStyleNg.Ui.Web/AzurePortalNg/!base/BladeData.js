var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#region Class Definition: BladeData
    var BladeData = (function (_super) {
        __extends(BladeData, _super);
        //#region Properties
        //portalService: PortalService;
        //#endregion
        //#region Constructor
        function BladeData(portalService, path, title, subtitle, width) {
            if (width === void 0) { width = 300; }
            _super.call(this, portalService, path, title, subtitle, width);
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BaseViewModel\' constructor called.', [this, portalService, path, title, subtitle, width]);
            this.blade = this;
        }
        //#endregion
        //#region Methods
        //#region GetDataList
        BladeData.prototype.getDataList = function () {
            AzurePortalNg.Debug.write('[azureportalng-debug] \'BaseViewModel.getDataList\' called.', [this]);
            var that = this;
            that.statusbar = 'Daten laden...';
            that.statusbarClass = '';
            return this.onGetDataList().success(function (data) {
                that.statusbar = '';
                that.statusbarClass = '';
                that.setObsoleteLayoutProperites();
            }).error(function (data, status, headers, config) {
                that.statusbar = 'FEHLER: ' + data;
                that.statusbarClass = 'message-info message-off';
                that.setObsoleteLayoutProperites();
            });
        };
        BladeData.prototype.onGetDataList = function () {
            throw new Error('DEVELOPER: [onGetDataList] is an abstract function. Define one in the derived class.');
        };
        return BladeData;
    })(AzurePortalNg.Blade);
    AzurePortalNg.BladeData = BladeData;
})(AzurePortalNg || (AzurePortalNg = {}));
//# sourceMappingURL=BladeData.js.map