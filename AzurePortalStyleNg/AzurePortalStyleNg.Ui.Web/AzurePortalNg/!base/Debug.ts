﻿module AzurePortalNg {
    'use strict';

    //#region Class Definition: Debug

    export class Debug {

        //#region Properties

        static isEnabled: boolean = false;
        static isWithObjects: boolean = false;

        //#endregion

        //#region Constructors

        constructor() {
        }

        //#endregion

        //#region Methods

        static enable() {
            this.isEnabled = true;
        }

        static disable() {
            this.isEnabled = false;
        }

        static write(text: string);
        static write(text: string, objects?: Array<any>);
        static write(text: string, objects?: Array<any>) {
            if (this.isEnabled) {
                console.log(text);

                if (objects !== undefined && this.isWithObjects) {
                    objects.forEach(function (item) {
                        console.log(item);
                    });
                }
            }
        }

        //#endregion
    }

    //#endregion

}