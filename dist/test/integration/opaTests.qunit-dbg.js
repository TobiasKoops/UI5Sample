// TEST
// Version: 0.01
// Built on: 2020-1-31 15:13:26
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