// TEST
// Version: 0.01
// Built on: 2020-1-31 15:13:26
/*global QUnit*/

sap.ui.define([
	"sample/UI5_Sample/controller/View1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View1 Controller");

	QUnit.test("I should test the View1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});