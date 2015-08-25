﻿module SampleTS {
    'use strict';

    //#region Class Definition

    class Blade21 extends AzurePortalNg.BladeList {

        //#region Constructors

        constructor(portalService: AzurePortalNg.PortalService) {
            super(portalService, '/SampleTS/blade21/blade21.html', 'Blade 2-1', 'TypeScript based', 315);

            this.isCommandNew = true;
            this.commandNewText = 'Blade 2';

            this.statusbar = 'Blade 2-1...';
        }

        //#endregion

        //#region Methods - Overrides for Blade

        protected onCommandNew(): void {
            this.portalService.bladeArea.addBlade('/SampleTS/blade2/blade2.html', this.path);
        }

        //#endregion

        //#region Data Access

        protected onGetDataList(): angular.IHttpPromise<any> {
            return this.portalService.$http({ method: 'GET', url: '/customers' });
        }

        //#endregion
    }

    //#endregion

    //#region Angular Registration

    (function () {
        'use strict';
        angular.module('sampleTsApp').controller('blade21', ['azurePortalNg.portalService', Blade21]);
    })();

    //#endregion

}