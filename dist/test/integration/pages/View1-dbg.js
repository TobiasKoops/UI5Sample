// TEST
// Version: 0.01
// Built on: 2020-1-31 15:13:26
sap.ui.define([
	"sap/ui/test/Opa5"
], function (Opa5) {
	"use strict";
	var sViewName = "View1";
	Opa5.createPageObjects({
		onTheAppPage: {

			actions: {},

			assertions: {

				iShouldSeeTheApp: function () {
					return this.waitFor({
						id: "app",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The View1 view is displayed");
						},
						errorMessage: "Did not find the View1 view"
					});
				}
			}
		}
	});

});