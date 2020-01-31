/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sample/UI5_Sample/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});