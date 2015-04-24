var AzurePortalNg;
(function (AzurePortalNg) {
    'use strict';
    //#endregion
    //#region Enum Definition: BladeCommands
    (function (BladeCommands) {
        BladeCommands[BladeCommands["Cancel"] = 0] = "Cancel";
        BladeCommands[BladeCommands["Delete"] = 1] = "Delete";
        BladeCommands[BladeCommands["New"] = 2] = "New";
        BladeCommands[BladeCommands["Save"] = 3] = "Save";
    })(AzurePortalNg.BladeCommands || (AzurePortalNg.BladeCommands = {}));
    var BladeCommands = AzurePortalNg.BladeCommands;
    //#endregion
    //#region Class Definition: BladeCommand
    var BladeCommand = (function () {
        function BladeCommand() {
            this.isVisible = false;
            this.isEnabled = false;
            this.text = '';
        }
        return BladeCommand;
    })();
    AzurePortalNg.BladeCommand = BladeCommand;
    //#endregion
    //#region Class Definition: BladeService
    var BladeService = (function () {
        //#endregion
        //#region Constructors
        function BladeService(portalService) {
            //#region Properties
            this.bladeUrls = new Array();
            this.portalService = portalService;
            this.portalService.bladeService = this;
        }
        //#endregion
        //#region Methods
        BladeService.prototype.setFirstBlade = function (path) {
            this.clearAll();
            return this.addBlade('', path);
        };
        BladeService.prototype.addBlade = function (senderPath, path) {
            var that = this;
            if (path === undefined || path === '') {
                return;
            }
            if (that.portalService.$window.document === undefined) {
                throw new Error('[azureportalng] [this.$window.document] undefined.');
            }
            var portalcontent = that.portalService.$window.document.getElementById('azureportalscroll');
            if (portalcontent === null) {
                throw new Error('[azureportalng] HTML eLement with ID [azureportalscroll] not found. Maybe it is to early to call function [addBladePath].');
            }
            this.clearChild(senderPath);
            this.bladeUrls.forEach(function (blade) {
                if (blade.path === path) {
                    throw new Error('[azureportalng] path: \'' + path + '\' could not be added. It is allready add.');
                }
                ;
            });
            var blade = new AzurePortalNg.Blade(that.portalService, path);
            that.bladeUrls.push(blade);
            that.portalService.$window.setTimeout(function () {
                var azureportalblades = that.portalService.$window.document.getElementsByClassName('azureportalblade');
                var i = that.bladeUrls.length - 1;
                // HACK: Sometime azureportalblades[i].offsetLeft is undefined.
                //       So now if it is, the user has to scroll on its own.
                //if (azureportalblades[i] !== undefined && azureportalblades[i].offsetLeft !== undefined) {
                //    var sl = azureportalblades[i].offsetLeft - 30;
                //    portalcontent.scrollLeft = sl;
                //}
            }, 250);
            return blade;
        };
        BladeService.prototype.clearAll = function () {
            this.bladeUrls.length = 0;
        };
        BladeService.prototype.clear = function (path) {
            var that = this;
            that.bladeUrls.forEach(function (blade, index) {
                if (blade.path === path) {
                    that.bladeUrls.length = index;
                    return;
                }
            });
            throw new Error('[azureportalng] path: \'' + path + '\' could not be removed, since it is not shown.');
        };
        BladeService.prototype.clearChild = function (path) {
            var that = this;
            that.bladeUrls.forEach(function (blade, index) {
                if (blade.path === path) {
                    that.bladeUrls.length = index + 1;
                    return;
                }
            });
        };
        return BladeService;
    })();
    AzurePortalNg.BladeService = BladeService;
    //#endregion
    //#region Angular Registration
    (function () {
        'use strict';
        angular.module('azureportalng').service('azurePortalNg.bladeService', ['$window', AzurePortalNg.BladeService]);
    })();
})(AzurePortalNg || (AzurePortalNg = {}));
//# sourceMappingURL=Blade.Service.js.map