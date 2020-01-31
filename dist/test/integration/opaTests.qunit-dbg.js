/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sample/UI5_Sample/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});