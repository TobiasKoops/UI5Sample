// TEST
// Version: 0.01
// Built on: 2020-2-21 1:40:43 PM
sap.ui.define([
	"sap/ui/test/Opa5",
	"./arrangements/Startup",
	"./NavigationJourney"
], function (Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Startup(),
		viewNamespace: "sample.UI5_Sample.view.",
		autoWait: true
	});
});