// TEST
// Version: 0.01
// Built on: 2020-2-21 1:40:43 PM
sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sample/UI5_Sample/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("sample.UI5_Sample.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});