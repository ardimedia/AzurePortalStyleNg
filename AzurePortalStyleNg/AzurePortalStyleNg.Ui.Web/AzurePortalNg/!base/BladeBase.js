var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    var BaseViewModel = (function (_super) {
        __extends(BaseViewModel, _super);
        //#endregion
        //#region Constructor
        function BaseViewModel(portalService, path, title, subtitle, width) {
            if (width === void 0) { width = 300; }
            _super.call(this, portalService, path, title, subtitle, width);
            this.blade = this;
        }
        //#endregion
        //#region Methods
        //#region GetDataList
        BaseViewModel.prototype.getDataList = function () {
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
        BaseViewModel.prototype.onGetDataList = function () {
            throw new Error('DEVELOPER: [onGetDataList] is an abstract function. Define one in the derived class.');
        };
        return BaseViewModel;
    })(AzurePortalNg.Blade);
    AzurePortalNg.BaseViewModel = BaseViewModel;
})(AzurePortalNg || (AzurePortalNg = {}));
//# sourceMappingURL=BladeBase.js.map